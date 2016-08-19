% Kyle Hunter
% SYSEN 5240
% Project
% 9 August 2016

function [ fitScore, totalTeamPIM ] = fitPIM( pim )
% this function calculates overall fitness of the teams cumulative penalty
% minutes. The function begins by calculating the total penalty minutes
% accumulated by the current team. Next, bins are created in which the
% penalty minute value can be evaluated by. Lastly, the penalty minute
% value for the team is placed into one of the created bins of values 1-10.
% However, because the goal is to minimize the number of penalty minutes,
% the bin number is inverted to be the opposite end of the scale. This
% means if the bin is 1 the inverted value is 10, if the bin is 2 the
% inverted value is 9, etc. That means that the lower the penalty minutes
% total is for the team, the higher the fitness value score. The inverted
% bin number is then the fitness score of the teams total points value.
% As we are looking to minimize the teams total penalty minutes, as the
% team penalty minute total increases the fitness score decreases.

% inputs:
%   - pim: a vector of the penalty minutes per player on the team
% outputs
%   - fitScore: the penalty minutes fitness score of the given team.
%               Can be 1-10, 1 being the worst and 10 being the best.

    % initializes variables
    totalTeamPIM = 0;
    teamSize = length(pim);
    bins = [];
    numBins = 10;
    minBin = 600;
    binSize = 35;

    % calculates the total penalty minutes for the current team
    for(grabPimCtr = 1:1:teamSize)
        currPIM = pim(grabPimCtr);
        totalTeamPIM = totalTeamPIM + currPIM;
    end
    
    % creates the bins based off of the bin size
    for(binsCtr = 1:1:numBins-1)
        if(binsCtr == 1)
            bins(binsCtr) = minBin;
        else
            bins(binsCtr) = (bins(binsCtr-1)) + binSize;
        end
    end
    
    % determines what bin the total penalty minutes for the team falls in
    % keep in mind, the fitScore_temp gets inverted to the actual fitness
    %   score because the higher the penalty minutes = the lower the
    % fitness score
    for(fitCtr = 1:1:numBins)
        if(fitCtr < numBins)
            if(totalTeamPIM <= bins(fitCtr))
                fitScore_temp = fitCtr;
                fitScore = abs(fitScore_temp-(numBins+1));
                break
            end
        elseif(fitCtr == numBins)
            if(bins(fitCtr-1) < totalTeamPIM)
                fitScore_temp = fitCtr;
                fitScore = abs(fitScore_temp-(numBins+1));
            end
        end 
    end
end

