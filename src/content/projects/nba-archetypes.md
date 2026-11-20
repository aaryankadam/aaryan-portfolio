---
title: NBA Player Archetype Clustering
summary: Data-driven NBA player archetypes from K-Means and GMM clustering, tested for what they add to Win Shares prediction.
order: 5
stack: [Python, PCA, K-Means, GMM, Random Forest]
status: shipped
repo: https://github.com/aaryankadam/NBA-Beyond-Positions
---

*Course project, CS 7641 (Machine Learning), Georgia Tech.*

## The problem

Traditional position labels hide how modern NBA players actually contribute. Scouting by position creates market inefficiencies: teams can overpay for high-volume scorers and undervalue role players whose impact shows up in deflections, screen assists and movement. The project asks whether data-driven playstyle archetypes can describe players better than positions, and whether they help predict team impact (Win Shares).

## Approach

**Data.** Player statistics for the 2015-16 to 2025-26 seasons from `nba_api` (11 tables: traditional, advanced, hustle, tracking, shot location, synergy play types and others) plus Basketball Reference advanced metrics, with Win Shares as the target. The two sources share no player ID, so they were joined on normalized names and seasons. Players were filtered to qualified minutes and games (at least 12 minutes per game and 20 games), and missing synergy values were handled with logical zeros and position-season medians. The clustering set has 4,049 player records and 50 features.

**Archetypes.** PCA compressed the 50 correlated features into 21 components that keep 90% of the variance. Two clustering methods were used because modern basketball is positionless:

- **K-Means** (hard assignments): k = 6, chosen from the elbow plot with silhouette and Davies-Bouldin scores. Clustering on PCA components scored better than on the raw standardized features (silhouette 0.131 vs 0.113).
- **Gaussian mixture models** (soft assignments): k = 5, chosen by BIC. Each player gets a probability over archetypes, which surfaces hybrid players who overlap several roles.

Cluster centers were mapped back to traditional statistics to name the archetypes, such as rim runners, secondary playmakers and 3&D wings.

**Win Shares prediction.** To avoid rebuilding Win Shares from the counting stats it is computed from, features went through a selection pipeline: a VIF filter (removing 20 features), then correlation, mutual information and Elastic Net, combined by ensemble voting into 13 features. Five experiments crossed feature sets (stats only, archetype labels only, labels plus stats) with Linear Regression, Random Forest and SVR.

## Result

- Archetype labels alone are weak predictors (best R² 0.357 for K-Means labels, 0.246 for GMM probabilities).
- Adding K-Means labels to the 13 selected features lifted Random Forest R² from 0.643 to 0.662 on 4,044 rows. The gain is modest but suggests the archetypes add some signal beyond the statistics. GMM probabilities helped less (0.648).
- Random Forest was the best model in every experiment.

**Salary value gap (2023-24, 325 players).** Using the model's predicted Win Shares against actual salary, Traditional Rim Runners were the most undervalued archetype (+$6.7M on average) and Primary Initiators the most overpaid (-$8.6M).

## What I'd do next

- Cluster separation is modest (silhouette about 0.13), so archetype boundaries are soft and the names are interpretive.
- The salary analysis is noisy at the player level, ignores the commercial premium for stars, and its most undervalued players are mostly on rookie contracts, which is a feature of the labor market rather than an exploitable gap.
- TODO: add a next step, such as validating archetypes on held-out seasons.

## Links

- Repo: [NBA-Beyond-Positions](https://github.com/aaryankadam/NBA-Beyond-Positions)
