const Joi = require('joi');


const cuponsCreateSchema = Joi.object({
  id: Joi.number(),
  code: Joi.string(),
  amount: Joi.string(),
  date_created: Joi.string().isoDate(),
  date_created_gmt: Joi.string().isoDate(),
  date_modified: Joi.string().isoDate(),
  date_modified_gmt: Joi.string().isoDate(),
  discount_type: Joi.string().valid("fixed_cart", "fixed_product", "percent"),
  description: Joi.string().allow(""),
  date_expires: Joi.string().isoDate().allow(null),
  date_expires_gmt: Joi.string().isoDate().allow(null),
  usage_count: Joi.number(),
  individual_use: Joi.boolean(),
  product_ids: Joi.array().items(Joi.number()),
  excluded_product_ids: Joi.array().items(Joi.number()),
  usage_limit: Joi.number().allow(null),
  usage_limit_per_user: Joi.number().allow(null),
  limit_usage_to_x_items: Joi.number().allow(null),
  free_shipping: Joi.boolean(),
  product_categories: Joi.array().items(Joi.number()),
  excluded_product_categories: Joi.array().items(Joi.number()),
  exclude_sale_items: Joi.boolean(),
  minimum_amount: Joi.string(),
  maximum_amount: Joi.string(),
  email_restrictions: Joi.array().items(Joi.string().email()),
  used_by: Joi.array().items(Joi.string()),
  meta_data: Joi.array().items(Joi.object()),
  _links: Joi.object({
    self: Joi.array().items(
      Joi.object({
        href: Joi.string().uri(),
      })
    ),
    collection: Joi.array().items(
      Joi.object({
        href: Joi.string().uri(),
      })
    ),
  }),
});

module.exports = {
    cuponsCreateSchema,
};
