cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, customerName, createdOn]
    },

    revenue: {
      sql: `revenue`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    customerName: {
      sql: `customer_name`,
      type: `string`
    },
    
    customerPhone: {
      sql: `customer_phone`,
      type: `string`
    },
    
    staff: {
      sql: `staff`,
      type: `string`
    },
    
    customerEmail: {
      sql: `customer_email`,
      type: `string`
    },
    
    store: {
      sql: `store`,
      type: `string`
    },
    
    createdOn: {
      sql: `created_on`,
      type: `time`
    }
  },
  
  dataSource: `default`,

  preAggregations: {
    orderAndDate: {
      type: 'rollup',
      measures: [
        count,
        revenue
      ],
      dimensions: [
        id,
        store,
        staff,
        customerEmail,
        customerName
      ],
      timeDimension: createdOn,
      granularity: `day`,
      partitionGranularity: `week`,
      refreshKey: {
        /**
         * Aggregation refresh time.
         * @default '1 hour'
         */
        every: `10 minute`,
        incremental: true,
        updateWindow: `1 day`,
      },
      /**
       * Preventing build to only consider time from now
       * as there order timestamps for future.
       */
      buildRangeEnd: {
        sql: `SELECT NOW()`
      },
      /**
       * Enabling this CubeJS schedules creation of aggregation tables by itself.
       * Else it sets them on request only.
       * @default false
       */
      scheduledRefresh: true
    },
  },
});
