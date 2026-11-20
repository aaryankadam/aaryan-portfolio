---
title: Bike-Share Demand Forecasting
summary: Forecasts daily bike-share demand and turns the model into fleet and staffing rules.
order: 6
stack: [Python, scikit-learn, XGBoost, UCI data]
icon: chart
status: shipped
metric: Lasso test R² 0.697
repo: https://github.com/aaryankadam/bike_sharing_analysis
---

## The problem

Bike-share operators face an imbalance: at peak hours residential areas run out of bikes while central hubs overflow. The usual fix, dispatching trucks to rebalance the fleet, is expensive and reactive. This project looks at the historical drivers of daily demand and builds a forecast that lets operators get ahead of shifts instead of reacting to them.

## Approach

The data is the UCI Bike Sharing Dataset: daily Capital Bikeshare rentals in Washington D.C. for 2011-2012, with weather and seasonal information. Work is split into two notebooks:

1. **EDA and features:** distributions, trends (30-day rolling average, year over year), calendar and weather effects, and feature engineering (weather interaction flags, cyclical month encoding, lag and rolling demand features). The split is chronological into train, validation and test.
2. **Modeling:** a benchmark from Linear Regression through XGBoost, compared on RMSE, MAE and R², with residual analysis and feature importance.

Model output thresholds feed a four-tier operational framework (Low, Medium, High, Peak) with fleet allocation and staffing rules.

## Result

- Five models benchmarked. Linear models beat tree-based models; Lasso was best with test R² = 0.697 and RMSE = 1,089 rentals. A likely reason is the small dataset, which makes XGBoost over-engineered here.
- The model under-predicts on 57% of days, so unmet demand is the main operational risk rather than over-supply.

## Links

- Repo: [bike_sharing_analysis](https://github.com/aaryankadam/bike_sharing_analysis)
