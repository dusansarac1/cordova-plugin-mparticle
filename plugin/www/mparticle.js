'use strict'

var cordova = require('cordova')

var exec = function (action, args) {
  cordova.exec(function (winParam) {},
    function (error) { console.log(error) },
    'MParticle',
    action,
    args)
}

var mparticle = {
  EventType: {
    Navigation: 1,
    Location: 2,
    Search: 3,
    Transaction: 4,
    UserContent: 5,
    UserPreference: 6,
    Social: 7,
    Other: 8
  },

  UserAttributeType: {
    FirstName: '$FirstName',
    LastName: '$LastName',
    Address: '$Address',
    State: '$State',
    City: '$City',
    Zipcode: '$Zip',
    Country: '$Country',
    Age: '$Age',
    Gender: '$Gender',
    MobileNumber: '$Mobile'
  },

  ProductActionType: {
    AddToCart: 1,
    RemoveFromCart: 2,
    Checkout: 3,
    CheckoutOption: 4,
    Click: 5,
    ViewDetail: 6,
    Purchase: 7,
    Refund: 8,
    AddToWishlist: 9,
    RemoveFromWishlist: 10
  },
  
  UserIdentityType: {
    CustomerId: 'customerId',
    Email: 'email',
    Facebook: 'facebook',
    Other: 'other',
  },

  PromotionActionType: {
    View: 0,
    Click: 1
  },

  logEvent: function (eventName, type, attributes) {
    exec('logEvent', [eventName, type, attributes])
  },

  logCommerceEvent: function (commerceEvent) {
    exec('logCommerceEvent', [commerceEvent])
  },

  logScreenEvent: function (screenName, attributes) {
    exec('logScreenEvent', [screenName, attributes])
  },

  Impression: function (impressionListName, products) {
    this.impressionListName = impressionListName
    this.products = products
  },

  Promotion: function (id, name, creative, position) {
    this.id = id
    this.name = name
    this.creative = creative
    this.position = position
  },

  Product: function (name, sku, price, quantity) {
    this.name = name
    this.sku = sku
    this.price = price
    this.quantity = quantity

    this.setBrand = function (brand) {
      this.brand = brand
      return this
    }

    this.setCouponCode = function (couponCode) {
      this.couponCode = couponCode
      return this
    }

    this.setPosition = function (position) {
      this.position = position
      return this
    }

    this.setCategory = function (category) {
      this.category = category
      return this
    }

    this.setVariant = function (variant) {
      this.variant = variant
      return this
    }

    this.setCustomAttributes = function (customAttributes) {
      this.customAttributes = customAttributes
      return this
    }
  },

  TransactionAttributes: function (transactionId) {
    this.transactionId = transactionId

    this.setAffiliation = function (affiliation) {
      this.affiliation = affiliation
      return this
    }

    this.setRevenue = function (revenue) {
      this.revenue = revenue
      return this
    }

    this.setShipping = function (shipping) {
      this.shipping = shipping
      return this
    }

    this.setTax = function (tax) {
      this.tax = tax
      return this
    }

    this.setCouponCode = function (couponCode) {
      this.couponCode = couponCode
      return this
    }
  },

  CommerceEvent: function () {
    this.setTransactionAttributes = function (transactionAttributes) {
      this.transactionAttributes = transactionAttributes
      return this
    }

    this.setProductActionType = function (productActionType) {
      this.productActionType = productActionType
      return this
    }

    this.setPromotionActionType = function (promotionActionType) {
      this.promotionActionType = promotionActionType
      return this
    }

    this.setProducts = function (products) {
      this.products = products
      return this
    }

    this.setPromotions = function (promotions) {
      this.promotions = promotions
      return this
    }

    this.setImpressions = function (impressions) {
      this.impressions = impressions
      return this
    }

    this.setScreenName = function (screenName) {
      this.screenName = screenName
      return this
    }

    this.setCurrency = function (currency) {
      this.currency = currency
      return this
    }

    this.setCustomAttributes = function (customAttributes) {
      this.customAttributes = customAttributes
      return this
    }

    this.setCheckoutOptions = function (checkoutOptions) {
      this.checkoutOptions = checkoutOptions
      return this
    }

    this.setProductActionListName = function (productActionListName) {
      this.productActionListName = productActionListName
      return this
    }

    this.setProductActionListSource = function (productActionListSource) {
      this.productActionListSource = productActionListSource
      return this
    }

    this.setCheckoutStep = function (checkoutStep) {
      this.checkoutStep = checkoutStep
      return this
    }

    this.setNonInteractive = function (nonInteractive) {
      this.nonInteractive = nonInteractive
      return this
    }
  },

  User: function (userId) {
    this.userId = userId

    this.setUserAttribute = function (key, value) {
      if (value && value.constructor === Array) {
        exec('setUserAttributeArray', [this.userId, key, value])
      } else {
        exec('setUserAttribute', [this.userId, key, value])
      }
    }

    this.setUserAttributeArray = function (key, values) {
      exec('setUserAttributeArray', [this.userId, key, values])
    }

    this.setUserTag = function (tag) {
      exec('setUserTag', [this.userId, tag])
    }

    this.removeUserAttribute = function (key) {
      exec('removeUserAttribute', [this.userId, key])
    }

    this.getUserIdentities = function (completion) {
      cordova.exec(completion,
        function (error) { console.log(error) },
        'MParticle',
        'getUserIdentities',
        [this.userId])
    }
  },

  Identity: function () {
    this.getCurrentUser = function (completion) {
      cordova.exec(completion,
        function (error) { console.log(error) },
        'MParticle',
        'getCurrentUser',
        [])
    }

    this.identify = function (IdentityRequest, completion) {
      cordova.exec(completion,
        function (error) { console.log(error) },
        'MParticle',
        'identify',
        [IdentityRequest])
    }

    this.login = function (IdentityRequest, completion) {
      cordova.exec(completion,
        function (error) { console.log(error) },
        'MParticle',
        'login',
        [IdentityRequest])
    }

    this.logout = function (IdentityRequest, completion) {
      cordova.exec(completion,
        function (error) { console.log(error) },
        'MParticle',
        'logout',
        [IdentityRequest])
    }

    this.modify = function (IdentityRequest, completion) {
      cordova.exec(completion,
        function (error) { console.log(error) },
        'MParticle',
        'modify',
        [IdentityRequest])
    }
  }
}

mparticle.IdentityRequest = function () {
  this.setEmail = function (email) {
    this.email = email
    return this
  }

  this.setUserIdentity = function (userIdentity, identityType) {
    switch (identityType) {
      case mparticle.UserIdentityType.Other:
        this.other = userIdentity
        break
      case mparticle.UserIdentityType.CustomerId:
        this.customerId = userIdentity
        break
      case mparticle.UserIdentityType.Facebook:
        this.facebook = userIdentity
        break
      case mparticle.UserIdentityType.Twitter:
        this.twitter = userIdentity
        break
      case mparticle.UserIdentityType.Google:
        this.google = userIdentity
        break
      case mparticle.UserIdentityType.Microsoft:
        this.microsoft = userIdentity
        break
      case mparticle.UserIdentityType.Yahoo:
        this.yahoo = userIdentity
        break
      case mparticle.UserIdentityType.Email:
        this.email = userIdentity
        break
      case mparticle.UserIdentityType.FacebookCustomAudienceId:
        this.facebookCustom = userIdentity
        break
      case mparticle.UserIdentityType.Other2:
        this.other2 = userIdentity
        break
      case mparticle.UserIdentityType.Other3:
        this.other3 = userIdentity
        break
      case mparticle.UserIdentityType.Other4:
        this.other4 = userIdentity
        break
      default:
        break
    }
    return this
  }
}

mparticle.CommerceEvent.createProductActionEvent = function (productActionType, products, transactionAttributes) {
  return new mparticle.CommerceEvent()
    .setProductActionType(productActionType)
    .setProducts(products)
    .setTransactionAttributes(transactionAttributes)
}

mparticle.CommerceEvent.createPromotionEvent = function (promotionActionType, promotions) {
  return new mparticle.CommerceEvent()
    .setPromotionActionType(promotionActionType)
    .setPromotions(promotions)
}

mparticle.CommerceEvent.createImpressionEvent = function (impressions) {
  return new mparticle.CommerceEvent()
    .setImpressions(impressions)
}

module.exports = mparticle
