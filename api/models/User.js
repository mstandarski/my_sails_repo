/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    card_name: {
      type: "string",
      required: true,
      unique: true
    },
    bank: {
      type: "string",
      minLength: 1,
      required: true
    },
    reward: {
      type: "string",
      required: true
    },
    annual_fee: {
      type: "string",
      required: true
    },
    credit_score_needed: {
      type: "string",
      required: true,
      enum: ['poor', 'average', 'good', 'excellent']
    },
    bonus: {
      type: "integer",
      required: true
    },
    minimum_spend: {
      type: "integer",
      required: true
    },
    rewards_rate: {
      type: "integer",
      required: true
    }

  }
};
