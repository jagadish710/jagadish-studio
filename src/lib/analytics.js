// Google Analytics 4 (GA4) Event Dispatcher for Merqurie
// Safely tracks user interactions, button clicks, and conversions

export function trackEvent(eventName, params = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        ...params,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (err) {
    // Adblockers or disabled tracking safely handled
  }
}

export function trackLeadClick(source, target = 'WhatsApp') {
  trackEvent('generate_lead', {
    event_category: 'Lead Funnel',
    event_label: `${target} - ${source}`,
    source: source,
  });
}

export function trackSampleRequest(source) {
  trackEvent('request_sample_preview', {
    event_category: 'Conversion',
    event_label: source || 'Hero Button',
  });
}

export function trackPlanSelect(planName, price) {
  trackEvent('select_pricing_tier', {
    event_category: 'Pricing',
    event_label: planName,
    value: price,
  });
}
