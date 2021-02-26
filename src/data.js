export const organizations = [
  {name: 'Shopify', industries: ['e-commerce', 'software']},
  {name: 'Lambda School', industries: ['training', 'software development']},
  {name: 'E-Bay', industries: ['trading', 'platforms']},
  {name: 'Microsoft', industries: ['productivity', 'software', 'operating systems']},
  {name: 'GitHub', industries: ['social media', 'software development', 'open source']},
  {name: 'XBox', industries: ['video games']},
  {name: 'Oracle', industries: ['databases', 'ERP']},
  {name: 'Amazon', industries: ['e-commerce', 'delivery', 'wharehouse space']},
  {name: 'Facebook', industries: ['social media']},
  {name: 'Twitter', industries: ['social media']},
  {name: 'Uber', industries: ['the gig economy', 'ride sharing', 'platforms']},
  {name: 'UberEATS', industries: ['the gig economy', 'food', 'pizza', 'platforms']},
  {name: 'Apple', industries: ['operating systems', 'hardware']},
  {name: 'Square', industries: ['payments']},
  {name: 'Stripe', industries: ['payments']},
  {name: 'Coinbase', industries: ['crypto currency']},
  {name: 'Instagram', industries: ['social media', 'photo sharing', 'photography']},
  {name: 'Instacart', industries: ['the gig economy', 'delivery']},
  {name: 'Netflix', industries: ['content', 'video', 'streaming']},
  {name: 'YouTube', industries: ['content', 'video', 'streaming']},
  {name: 'Salesforce', industries: ['CRM', 'sales people']},
  {name: 'Verizon', industries: ['telecom']},
  {name: 'AT&T', industries: ['telecom']},
  {name: 'Comcast', industries: ['telecom']},
  {name: 'Airbnb', industries: ['the gig economy', 'rentals', 'hotels']},
  {name: 'Zoom', industries: ['video conferencing']},
  {name: 'Spotify', industries: ['content', 'audio', 'music', 'podcasting', 'streaming']},
  {name: 'Intuit', industries: ['tax filing', 'accountants']},
  {name: 'PayPal', industries: ['money transfers']},
  {name: 'Mailchimp', industries: ['email marketing', 'marketing']},
  {name: 'WordPress', industries: ['CMS']},
  {name: 'Adobe', industries: ['graphic designers', 'graphic tools']},
  {name: 'Dropbox', industries: ['file storage']},
  {name: 'Amazon AWS', industries: ['file storage', 'hosting', 'sysops']},
  {name: 'WealthSimple', industries: ['investing']},
  {name: 'PriceLine', industries: ['hotels', 'rentals']},
]

export const industries = {}

organizations.forEach(organization => {
  organization.industries.forEach(industry => {
    if (industries[industry]) {
      industries[industry].push(organization)
    } else {
      industries[industry] = [organization]
    }
  })
})
