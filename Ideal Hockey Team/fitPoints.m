% Kyle Hunter
% SYSEN 5240
% Project
% 9 August 2016

function [ fitScore, totalTeamPoints ] = fitPoints( points )
% this function calculates overall fitness of the teams cumulative point
% total. The function begins by calculating the total points accumulated by
% the current team. Next, bins are created in which the point value can be
% evaluated by. Lastly, the point value for the team is placed into one of
% the created bins. The bin number is then the fitness score of the teams
% total points value. As we are looking to maximize the teams total points,
% as the team point total increases the fitness score increases.

% inputs:
%   - points: a vector of the point totals per player on the team
% outputs
%   - fitScore: the points fitness score of the given team. Can be 1-10, 1
%               being the worst and 10 being the best.

    % initializes variables
    totalTeamPoints = 0;
    teamSize = length(points);
    bins = [];
    numBins = 10;
    minBin = 485;
    binSize = 35;

    % calculates the total points for the current team
    for(grabPointsCtr = 1:1:teamSize)
        currPoints = points(grabPointsCtr);
        totalTeamPoints = totalTeamPoints + currPoints;
    end

    % creates the bins based off of the bin size
    for(binsCtr = 1:1:numBins-1)
        if(binsCtr == 1)
            bins(binsCtr) = minBin;
        else
            bins(binsCtr) = (bins(binsCtr-1)) + binSize;
        end
    end
    
    % determines what bin the total points for the team falls in
    for(fitCtr = 1:1:numBins)
        if(fitCtr < numBins)
            if(totalTeamPoints <= bins(fitCtr))
                fitScore = fitCtr;
                break
            end
        elseif(fitCtr == numBins)
            if(bins(fitCtr-1) < totalTeamPoints)
                fitScore = fitCtr;
            end
        end 
    end
end

