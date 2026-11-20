---
title: Defensive Coordination Index
summary: A coach-interpretable index of how well a back line defends as a unit, built from tracking data for NWSL and FA WSL matches.
order: 3
stack: [Python, SciPy, Databricks, Tracking data]
icon: shield
status: in-progress
---

*Practicum project. In progress: the final deliverable is due 11/23 and the numbers below are as of 11/20.*

<!-- TODO: confirm with the sponsor contact what can be public, and whether to name the Federation in the title. The data-use agreement allows aggregate counts only: no tracking plots, no player or team names, no screenshots of data. -->

## The problem

Quantify how well a back line defends as a unit, in a way coaches can interpret.

## Approach

The data is SkillCorner broadcast tracking (10 FPS positions plus derived events) from the 2024/25 NWSL and FA WSL seasons. 234 matches were available and 166 were used in the DCI analysis.

The Defensive Coordination Index (DCI) is a geometric mean of two components, synchronization and stability, computed for two scenarios:

- **Block defense:** a settled back four, scored with a synchronization rate and a spacing-tension stability rate.
- **Press-and-cover:** press detection with pressure zones, role assignment for coverers, target-directed synchronization, and exposed-gap stability.

Component weights were derived by regression. Scoring runs through a Databricks pipeline: block-defense scoring covers 2.7M frames and press-cover scoring covers 11K windows.

## Result

The block and press-cover scores are very weakly correlated (Spearman 0.06), which supports treating them as separate scenarios. The metric was reworked to fix floor and ceiling effects (synchronization 5% to 44%, stability 90% to 55%).

Final correlation values (overall, NWSL and WSL) will be added after the final report. An expected-threat validation check points in the opposite direction to what was expected and is still being interpreted, so no conclusion is stated yet.

## What I'd do next

- Resolve the expected-threat validation result.

## Links

- Repo: coming soon.
- Raw tracking data is not shared (data-use agreement).
