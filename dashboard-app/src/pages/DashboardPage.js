import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
const DashboardItems = [
  {
    id: 0,
    name: 'Top earning stores (Last month)',
    vizState: {
      query: {
        measures: ['Orders.revenue', 'Orders.count'],
        timeDimensions: [
          {
            dimension: 'Orders.createdOn',
            dateRange: 'Last month',
          },
        ],
        order: [
          ['Orders.revenue', 'desc'],
          ['Orders.count', 'desc'],
        ],
        dimensions: ['Orders.store'],
        limit: 5,
      },
      chartType: 'table',
    },
  },
  {
    id: 1,
    name: 'Best staff (last month)',
    vizState: {
      query: {
        measures: ['Orders.revenue', 'Orders.count'],
        timeDimensions: [
          {
            dimension: 'Orders.createdOn',
            dateRange: 'Last month',
          },
        ],
        order: [
          ['Orders.revenue', 'desc'],
          ['Orders.count', 'desc'],
        ],
        dimensions: ['Orders.staff'],
        limit: 5,
      },
      chartType: 'table',
    },
  },
  {
    id: 2,
    name: 'Daily orders revenue (last 7 days)',
    vizState: {
      query: {
        measures: ['Orders.revenue'],
        timeDimensions: [
          {
            dimension: 'Orders.createdOn',
            granularity: 'day',
            dateRange: 'Last 7 days',
          },
        ],
        order: {
          'Orders.createdOn': 'asc',
        },
        dimensions: [],
      },
      chartType: 'line',
    },
  },
  {
    id: 3,
    name: 'Truax orders by staff (Last month)',
    vizState: {
      query: {
        measures: ['Orders.revenue'],
        timeDimensions: [
          {
            dimension: 'Orders.createdOn',
            dateRange: 'Last month',
          },
        ],
        order: {
          'Orders.revenue': 'desc',
        },
        dimensions: ['Orders.staff'],
        filters: [
          {
            member: 'Orders.store',
            operator: 'equals',
            values: ['Truax'],
          },
        ],
      },
      chartType: 'bar',
    },
  },
];

const DashboardPage = () => {
  const dashboardItem = (item) => (
    <Grid item xs={12} lg={6} key={item.id}>
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Grid>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: 'center',
        padding: 12,
      }}
    >
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>
  );

  return DashboardItems.length ? (
    <Dashboard>{DashboardItems.map(dashboardItem)}</Dashboard>
  ) : (
    <Empty />
  );
};

export default DashboardPage;
