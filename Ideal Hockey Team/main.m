% Kyle Hunter
% SYSEN 5240
% Project
% 9 August 2016

% Required data file: .../stats.txt

% Description:


%% Cleanup
close all
clc
clear
format short

%% initialization

% reads data in file into a table
% 320 players total. 247 forwards, 73 defensemen
database = readtable('stats.txt');

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Simulated Annealing initialization
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Tmax = 100000; % max possible temperature
T = Tmax; % current temperature initialization
stopCtr = 1; % stopping criteria counter
iteration = 0; % total iterations
stopCtrMax = 50; % max stopping criteria counter
equiCtr = 1; % equilibrium counter
equiCtrMax = 50; % max equilibrium counter
findBestFitness = 1; % counter used to find the best fitness score at the end

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Variable initialization
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% provides the height of the table (not counting the column titles) which
% is equal to the number of players in database
numPlayers = height(database);
maxLines = 4; % maxmimum number of lines on a hockey team = 4
maxForwards = 3 * maxLines; % max number of forwards on team, 3 forwards per line on a hockey team
maxDefense = 2 * maxLines; % max number of defense on team, 2 defensemen per line on a hockey team
teamSize = maxForwards + maxDefense; % max number of players on team
indexForward = 1; % printing index used to increment sets of forwards
indexDefense = maxForwards + 1; % printing index used to increment sets of defensemen
bestIndexForward = 1; % printing index used to increment sets of best forwards
bestIndexDefense = maxForwards + 1; % printing index used to increment sets of best defensemen

% sets the column numbers for each column to use when accessing data from
% table
colPlayer = 1;
colPosition = 2;
colTeam = 3;
colGoals = 4;
colAssists = 5;
colPoints = 6;
colPlusMinus = 7;
colPIM = 8; % PIM = penalty minutes

totalTeamPoints = 0; % total points for current team

% total possible column values
dbTotalGoals = 0; % goals for database
dbTotalAssists = 0; % assists for database
dbTotalPoints = 0; % points for database
dbPlusMinusMin = 0; % minimum plus minus for database 
dbPlusMinusMax = 0; % maximum plus minus for database
dbTotalPIM = 0; % penalty minutes for database

% max stat per player in database
maxPlayerGoals = 0; % max goals per player in database
maxPlayerAssists = 0; % max assists per player in database
maxPlayerPoints = 0; % max points per player in database
maxPlayerMinus = 0; % max minus per player in database
maxPlayerPlus = 0; % max plus per player in database
maxPlayerPIM = 0; % max penalty minutes per player in database


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Utilities
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% total possible stats for database
for(possCtr = 1:1:numPlayers)
    % goals
    currGoals = database{possCtr,colGoals};
    dbTotalGoals = dbTotalGoals + currGoals;
    
    if(currGoals > maxPlayerGoals)
        maxPlayerGoals = currGoals;
    end
    
    % assists
    currAssists = database{possCtr,colAssists};
    dbTotalAssists = dbTotalAssists + currAssists;
    
    if(currAssists > maxPlayerAssists)
        maxPlayerAssists = currAssists;
    end
    
    % points
    currPoints = database{possCtr,colPoints};
    dbTotalPoints = dbTotalPoints + currPoints;
    
    if(currPoints > maxPlayerPoints)
        maxPlayerPoints = currPoints;
    end
    
    % plus/minus
    currPluMin = database{possCtr,colPlusMinus};
    if(currPluMin < 0)
        dbPlusMinusMin = dbPlusMinusMin + currPluMin;
        
        if(currPluMin < maxPlayerMinus)
            maxPlayerMinus = currPluMin;
        end
        
    else
        dbPlusMinusMax = dbPlusMinusMax + currPluMin;
        
        if(currPluMin > maxPlayerPlus)
            maxPlayerPlus = currPluMin;
        end
    end
    
    % PIM
    currPIM = database{possCtr,colPIM};
    dbTotalPIM = dbTotalPIM + currPIM;
    
    if(currPIM > maxPlayerPIM)
        maxPlayerPIM = currPIM;
    end
end


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Array initialization
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% arrays used to store data
teamIndexed = []; % initial team randomly generated, displays players index
% adds zeros to the array so that there are place holders to check for a
% repeat player when randomly generating the team
for(zeroCtr = 1:1:teamSize)
    teamIndexed = [teamIndexed 0];
end
playerNames = []; % names of players on the current lineup
playerPoints = []; % points of players on the current lineup
playerPIM = []; % penalty minutes of players on the current lineup
prevTeamIndexed = []; % maintains previous team prior to swap
teamMem = []; % holds every team per iteration
fitScoresMem = []; % every fitness score per iteration
TvectMem = []; % every temperature update per iteration
pointsMem = []; % every point value per iteration
pimMem = []; % every PIM value per iteration
bestPlayerNames = []; % best fitness score roster
bestPlayerPoints = []; % best fitness score points
bestPlayerPIM = []; % best fitness score PIM
ctrPlot = []; % used for plot of iteration numbers


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Initial solution - generation of initial team
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% this loop generates a team of size 'teamSize'
for(playerCtr = 1:1:teamSize)
    repeatPlayer = 0; % a flag if a generated player is a repeat. if 1,
                      % player is a repeat. 0, otherwise.
    
    % generates the forwards for the team first, then the defensemen. there
    % are a total number of 'maxForwards' forwards on the team, and a total
    % of 'maxDefense' defensemen on the team.
    if(playerCtr <= maxForwards)
        % randomly generates a player index. checks the generated players
        % position to see if they play defense
        randPlayerRow = randi([2 numPlayers]);
        currPosition = database{randPlayerRow,colPosition};
        isDefense = strcmp(currPosition, 'Defense');
        
        % if the generated player is a defenseman, keep generating a new
        % player until we get a forward
        while(isDefense == 1)
            randPlayerRow = randi([2 numPlayers]);
            currPosition = database{randPlayerRow,colPosition};
            isDefense = strcmp(currPosition, 'Defense');
        end
        
        % check through the initial team roster to see if the current
        % player is a repeat
        if(1)
            for(playerCheckCtr = 1:1:teamSize)
                playerCheck = teamIndexed(playerCheckCtr);
                
                % if the current player in the initial team roster is equal
                % to the generated player, set the repeatPlayer flag
                if(randPlayerRow == playerCheck)
                    repeatPlayer = 1;
                    break
                end
            end
            
            % player is a repeat, randomly generate another player and
            % compare their position to Defense
            while(repeatPlayer == 1)
                randPlayerRow = randi([2 numPlayers]);
                currPosition = database{randPlayerRow,colPosition};
                isDefense = strcmp(currPosition, 'Defense');
        
                % if the player is a defenseman, regenerate until a Forward
                % is generated
                while(isDefense == 1)
                    randPlayerRow = randi([2 numPlayers]);
                    currPosition = database{randPlayerRow,colPosition};
                    isDefense = strcmp(currPosition, 'Defense');
                end
                
                % check to make sure the player isn't a repeat. If they
                % are a repeat, set the flag and repeat the process
                for(playerCheckCtr = 1:1:teamSize)
                    playerCheck = teamIndexed(playerCheckCtr);
                    if(randPlayerRow == playerCheck)
                        repeatPlayer = 1;
                        break
                    else
                        repeatPlayer = 0;
                    end
                end
            end
        end
        
        % add newly generated player to the initial team roster
        teamIndexed(playerCtr) = randPlayerRow;
        
    % generate the defensemen
    elseif(maxForwards < playerCtr && playerCtr <= teamSize)
        % randomly generates a player index. checks the generated players
        % position to see if they play defense
        randPlayerRow = randi([2 numPlayers]);
        currPosition = database{randPlayerRow,colPosition};
        isForward = strcmp(currPosition, 'Forward');
        
        % if the generated player is a forward, keep generating a new
        % player until we get a defenseman
        while(isForward == 1)
            randPlayerRow = randi([2 numPlayers]);
            currPosition = database{randPlayerRow,colPosition};
            isForward = strcmp(currPosition, 'Forward');
        end
        
        % check through the initial team roster to see if the current
        % player is a repeat
        if(1)
            for(playerCheckCtr = 1:1:teamSize)
                playerCheck = teamIndexed(playerCheckCtr);
                
                % if the current player in the initial team roster is equal
                % to the generated player, set the repeatPlayer flag
                if(randPlayerRow == playerCheck)
                    repeatPlayer = 1;
                    break
                end
            end

            % player is a repeat, randomly generate another player and
            % compare their position to Forward
            while(repeatPlayer == 1)
                randPlayerRow = randi([2 numPlayers]);
                currPosition = database{randPlayerRow,colPosition};
                isForward = strcmp(currPosition, 'Forward');
                
                % if the player is a forward, regenerate until a
                % Defenseman is generated
                while(isForward == 1)
                    randPlayerRow = randi([2 numPlayers]);
                    currPosition = database{randPlayerRow,colPosition};
                    isForward = strcmp(currPosition, 'Forward');
                end
                
                % check to make sure the player isn't a repeat. If they
                % are a repeat, set the flag and repeat the process
                for(playerCheckCtr = 1:1:teamSize)
                    playerCheck = teamIndexed(playerCheckCtr);
                    if(randPlayerRow == playerCheck)
                        repeatPlayer = 1;
                        break
                    else
                        repeatPlayer = 0;
                    end
                end
            end
        end
        
        % add newly generated player to the initial team roster
        teamIndexed(playerCtr) = randPlayerRow;
        
    end
end


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Print out formatting
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% grabs the player names and points from the database based off of the
% generated indexes
for(grabPlayerDataCtr = 1:1:teamSize)
    currPlayer = database{teamIndexed(grabPlayerDataCtr),colPlayer};
    playerNames = [playerNames currPlayer];
    
    currPoints = database{teamIndexed(grabPlayerDataCtr),colPoints};
    playerPoints = [playerPoints currPoints];
    
    currPIM = database{teamIndexed(grabPlayerDataCtr),colPIM};
    playerPIM = [playerPIM currPIM];
end

% playerNames converted from type 'cell' to type 'char'
playerNames = char(playerNames);

fprintf('\n\n**********************************************************\n')
fprintf('\n\t\t   Initial Team Roster\n')
fprintf('\n**********************************************************\n\n')

% prints the initial team roster lines. For each line, the top 3 are
% forwards and the bottom 2 are defensemen.
for(lineCtr = 1:1:maxLines)
    fprintf('----------------------------------------------------------\n')
    fprintf('\t\t\tLine %d\n', lineCtr)
    fprintf('----------------------------------------------------------\n')
    fprintf('%s\t%s\t%s\n\n', playerNames(indexForward,:), playerNames(indexForward+1,:), playerNames(indexForward+2,:))
    fprintf('\t%s\t\t%s\n\n\n', playerNames(indexDefense,:), playerNames(indexDefense+1,:))
    
    % increment to the next pair of forwards and defensemen
    indexForward = indexForward + 3;
    indexDefense = indexDefense + 2;
end


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Fitness function calculations for initial team
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% fitness function 1 that calculates total points on team and determines
% score
[ fitTotalPoints ] = fitPoints( playerPoints );

% fitness function 2 that calculates total PIM on team and
% determines score
[ fitTotalPIM ] = fitPIM( playerPIM );

% subtract fitness scores for overall fitness score, higher = better
overallFitness = fitTotalPoints - fitTotalPIM;


fprintf('\n\n**********************************************************\n')
fprintf('\n\t\t   Initial Team Stats\n')
fprintf('\n**********************************************************\n\n')
fprintf('Maximum Fitness Score = %4.3f\n\n', overallFitness);


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% end of section
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% Simulated Annealing process

while(stopCtr < stopCtrMax) % stopping criteria not met
    while(equiCtr < equiCtrMax) % equilibrium not reached
        
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Generate a random neighbor x' using swap
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        if(1)
            
            repeatPlayer = 0;
            
            newPlayerNames = [];
            newPlayerPoints = [];
            newPlayerPIM = [];
            prevTeamIndexed = teamIndexed;
            
            randPlayerOut = randi([1 teamSize]);
            currPlayerOut = database{(teamIndexed(randPlayerOut)),colPlayer};
            currPositionOut = database{(teamIndexed(randPlayerOut)),colPosition};

            randPlayerIn = randi([2, numPlayers]);
            currPlayerIn = database{randPlayerIn,colPlayer};
            currPositionIn = database{randPlayerIn,colPosition};
            
            positionMatch = strcmp(currPositionIn, currPositionOut);
            
            while(positionMatch ~= 1)
                randPlayerIn = randi([2, numPlayers]);
                currPlayerIn = database{randPlayerIn,colPlayer};
                currPositionIn = database{randPlayerIn,colPosition};
            
                positionMatch = strcmp(currPositionIn, currPositionOut);
            end

            % check for a repeat
            for(teamCheckCtr = 1:1:teamSize)
                % if the current player in the current team roster is equal
                % to the generated player, set the repeatPlayer flag
                if(randPlayerIn == teamIndexed(teamCheckCtr))
                    repeatPlayer = 1;
                    break
                end
            end
            
            while(repeatPlayer == 1)
                randPlayerIn = randi([2 numPlayers]);
                currPlayerIn = database{randPlayerIn,colPlayer};
                currPositionIn = database{randPlayerIn,colPosition};

                positionMatch = strcmp(currPositionIn, currPositionOut);
        
                while(positionMatch ~= 1)
                    randPlayerIn = randi([2, numPlayers]);
                    currPlayerIn = database{randPlayerIn,colPlayer};
                    currPositionIn = database{randPlayerIn,colPosition};

                    positionMatch = strcmp(currPositionIn, currPositionOut);
                end
                
                % check to make sure the player isn't a repeat. If they
                % are a repeat, set the flag and repeat the process
                for(playerCheckCtr = 1:1:teamSize)
                    playerCheck = teamIndexed(playerCheckCtr);
                    if(randPlayerIn == playerCheck)
                        repeatPlayer = 1;
                        break
                    else
                        repeatPlayer = 0;
                    end
                end
            end
            
            teamIndexed(randPlayerOut) = randPlayerIn;
            
            % grabs the player names, points, and penalty minutes from the
            % database based off of the generated indexes
            for(grabPlayerDataCtr = 1:1:teamSize)
                currPlayer = database{teamIndexed(grabPlayerDataCtr),colPlayer};
                newPlayerNames = [newPlayerNames currPlayer];

                currPoints = database{teamIndexed(grabPlayerDataCtr),colPoints};
                newPlayerPoints = [newPlayerPoints currPoints];

                currPIM = database{teamIndexed(grabPlayerDataCtr),colPIM};
                newPlayerPIM = [newPlayerPIM currPIM];
            end
            
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Calculate new solutions fitness scores
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            
            % fitness function 1 that calculates total points on team and determines
            % score
            [ newFitTotalPoints, totalTeamPoints ] = fitPoints( newPlayerPoints );

            % fitness function 2 that calculates total PIM on team and
            % determines score
            [ newFitTotalPIM, totalTeamPIM ] = fitPIM( newPlayerPIM );

            % subtract fitness scores for overall fitness score, higher = better
            newOverallFitness = newFitTotalPoints - newFitTotalPIM;
            
        end
    
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Acceptance algorithm
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        
        deltaE = newOverallFitness - overallFitness;
        
         % if there's an improvement, accept the new fitness score
        if(deltaE >= 0)
            % add the new fitness score and include the new team
            overallFitness = newOverallFitness;
            teamMem = [teamMem;teamIndexed];
            
        else
            % calculate probability of acceptance for the new team
            probAcc = exp(deltaE/T);
            
            if((rand(1)) < probAcc)
                % add the new fitness score and include the new team
                overallFitness = newOverallFitness;
                teamMem = [teamMem;teamIndexed];
                
            else
                % do not accept the new fitness score and use the previous
                % team
                teamMem = [teamMem;prevTeamIndexed];
            end
        end
        
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% General stat and counter updates
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

        % update counters
        equiCtr = equiCtr + 1;
        iteration = iteration + 1;
        
        % update memory arrays for final analysis
        fitScoresMem(iteration) = overallFitness;
        TvectMem(iteration) = T;
        pointsMem(iteration) = totalTeamPoints;
        pimMem(iteration) = totalTeamPIM;
        ctrPlot(iteration) = iteration;
    end
    
    % temperature update
    T = 0.75 * T;
    
    % update counters
    equiCtr = 1;
    stopCtr = stopCtr + 1;

end


%% Results summary

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Plots to analyze data
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

fprintf('\n\n\n\n')
fprintf('\n\n**********************************************************\n')
fprintf('\n\t\tSimulated Annealing Results\n')
fprintf('\n**********************************************************\n\n')
fprintf('\nNumber of iterations = %d\n\n', iteration);
fprintf('Final Temperature = %4.3f\n\n', T);

bestFitScore = max(fitScoresMem); % find the highest overall fitness score

% find the shortest distance in the distances array based on the shortest
% variable and indexing the city solutions cityOrder array
while(findBestFitness <= iteration)
    if(fitScoresMem(findBestFitness) == bestFitScore)
        bestTeam = teamMem(findBestFitness,:);
        findBestFitness = iteration + 1;
    else
        findBestFitness = findBestFitness + 1;
    end
end

% grabs the player names and points from the database based off of the
% generated indexes
for(grabPlayerDataCtr = 1:1:teamSize)
    currPlayer = database{bestTeam(grabPlayerDataCtr),colPlayer};
    bestPlayerNames = [bestPlayerNames currPlayer];
    
    currPoints = database{bestTeam(grabPlayerDataCtr),colPoints};
    bestPlayerPoints = [bestPlayerPoints currPoints];
    
    currPIM = database{bestTeam(grabPlayerDataCtr),colPIM};
    bestPlayerPIM = [bestPlayerPIM currPIM];
end

% playerNames converted from type 'cell' to type 'char'
bestPlayerNames = char(bestPlayerNames);

fprintf('\n\n**********************************************************\n')
fprintf('\n\t\t   Best Team Roster\n')
fprintf('\n**********************************************************\n\n\n')

% prints the initial team roster lines. For each line, the top 3 are
% forwards and the bottom 2 are defensemen.
for(lineCtr = 1:1:maxLines)
    fprintf('----------------------------------------------------------\n')
    fprintf('\t\t\tLine %d\n', lineCtr)
    fprintf('----------------------------------------------------------\n')
    fprintf('%s\t%s\t%s\n\n', bestPlayerNames(bestIndexForward,:), bestPlayerNames(bestIndexForward+1,:), bestPlayerNames(bestIndexForward+2,:))
    fprintf('\t%s\t\t%s\n\n', bestPlayerNames(bestIndexDefense,:), bestPlayerNames(bestIndexDefense+1,:))
    
    % increment to the next pair of forwards and defensemen
    bestIndexForward = bestIndexForward + 3;
    bestIndexDefense = bestIndexDefense + 2;
end

fprintf('\n\n\n\n**********************************************************\n')
fprintf('\n\t\t   Best Team Stats\n')
fprintf('\n**********************************************************\n\n\n')
fprintf('Maximum Fitness Score = %4.3f\n\n', max(fitScoresMem));


%% Graphical analysis

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Plots to analyze data
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% temperature over the lifetime of the running algorithm
plot(ctrPlot,TvectMem)
title('Annealing Schedule')
xlabel('Iterations')
ylabel('Temperature')

figure

% fitness score generations over the lifetime of the running algorithm
plot(ctrPlot,fitScoresMem)
title('Evolution of Overall Fitness Scores')
xlabel('Iterations')
ylabel('Current Fitness Score')

figure

% total team points over lifetime of the running algorithm
plot(ctrPlot,pointsMem)
title('Total Team Points')
xlabel('Iterations')
ylabel('Team Points')

figure

% total team peanlty minutes over lifetime of the running algorithm
plot(ctrPlot,pimMem)
title('Total Team Penalty Minutes')
xlabel('Iterations')
ylabel('Team Penalty Minutes')
