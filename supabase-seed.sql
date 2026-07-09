-- ============================================================
-- Scholar Digital Solutions website — Supabase seed
-- Run this in the Supabase SQL Editor once, after deploying
-- the site and connecting it to Vercel/Cloudflare.
-- ============================================================

-- 1. CLIENT RECORD
-- Adjust the name/package if you want this tracked differently.
insert into public.clients (name, package, domain)
values ('Scholar Digital Solutions', 'internal', 'scholardigitalsolutions.ie')
returning id;

-- Copy the returned id and use it below in place of
-- '<CLIENT_ID>'.

-- 2. WEBSITE RECORD
-- Update vercel_project_id / cloudflare_zone_id once those are
-- known (same pattern as your other client sites).
insert into public.websites (
  client_id, title, domain, site_key, site_type
) values (
  '<CLIENT_ID>',
  'Scholar Digital Solutions',
  'scholardigitalsolutions.ie',
  'scholar',
  'marketing'
);

-- ============================================================
-- 3. CONTENT ROWS
-- site_key = 'scholar' throughout. page_order controls the
-- order pages appear in the Website Editor's page dropdown;
-- section_order controls order within a page.
-- ============================================================

-- ---------- HOME (page_order 0) ----------

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'home', 'hero', 'home-hero',
  '{
    "eyebrow": "Websites + Dashboard, Built Together",
    "heading": "Websites that run your business, not just represent it",
    "subheading": "We design and build unique websites for growing businesses — every one comes with Scholar Dashboard, so you can edit your content, track your visitors, and see your site''s health without ever touching code.",
    "action_primary": "Get a Quote",
    "action_secondary": "See Pricing"
  }'::jsonb,
  0, 0,
  '["eyebrow", "heading", "subheading", "action_primary", "action_secondary"]'::jsonb
);

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'home', 'stats_band', 'home-stats-band',
  '{
    "stat_1_value": "6",
    "stat_1_label": "Website packages, from simple to full e-commerce",
    "stat_2_value": "100%",
    "stat_2_label": "Custom built — never a generic template",
    "stat_3_value": "24/7",
    "stat_3_label": "Live stats on your traffic and site health",
    "stat_4_value": "0",
    "stat_4_label": "Code required to update your own content"
  }'::jsonb,
  0, 1,
  '["stat_1_value", "stat_1_label", "stat_2_value", "stat_2_label", "stat_3_value", "stat_3_label", "stat_4_value", "stat_4_label"]'::jsonb
);

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'home', 'feature_grid', 'home-feature-grid',
  '{
    "heading": "Every website comes with its own dashboard",
    "subheading": "Scholar Dashboard is built into every package — a private admin panel where you manage your site''s content and keep an eye on how it''s performing.",
    "feature_1_title": "Live Text & Image Edits",
    "feature_1_text": "Update your headlines, copy, and photos yourself, anytime — changes go live in minutes, no developer needed.",
    "feature_2_title": "Stats Dashboard",
    "feature_2_text": "See your traffic, visitor activity, and hosting status at a glance, so you always know how your site is doing.",
    "feature_3_title": "AI Assistant",
    "feature_3_text": "Give your visitors an AI-powered chat assistant that can answer questions and help convert them into customers.",
    "feature_4_title": "Secure Payments",
    "feature_4_text": "Accept payments safely and reliably, whether it''s a one-off booking, a membership, or a full online store."
  }'::jsonb,
  0, 2,
  '["heading", "subheading", "feature_1_title", "feature_1_text", "feature_2_title", "feature_2_text", "feature_3_title", "feature_3_text", "feature_4_title", "feature_4_text"]'::jsonb
);

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'home', 'cta_band', 'home-cta-band',
  '{
    "heading": "Ready to build something that actually works for you?",
    "subheading": "Tell us about your business and we''ll help you pick the right package.",
    "action_label": "Start the Conversation"
  }'::jsonb,
  0, 3,
  '["heading", "subheading", "action_label"]'::jsonb
);

-- ---------- PRICING (page_order 1) ----------

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'pricing', 'pricing_hero', 'pricing-hero',
  '{
    "eyebrow": "Pricing",
    "heading": "Premium website packages",
    "subheading": "All websites are professionally designed to maximise credibility, conversions, and search visibility."
  }'::jsonb,
  1, 0,
  '["eyebrow", "heading", "subheading"]'::jsonb
);

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'pricing', 'packages', 'pricing-packages',
  '{
    "heading": "Find the right fit",
    "subheading": "Every package includes Scholar Dashboard, so you can manage your site the day it goes live.",
    "common_features": [
      "Custom built",
      "Contact form linked to email",
      "Mobile friendly",
      "Stats dashboard",
      "Live text and image edits",
      "SEO ready",
      "AI assistant (chat functionality)"
    ],
    "extras": [
      { "label": "Extra page", "price": "€199 + VAT" },
      { "label": "Domain email set up", "price": "€199 + VAT" },
      { "label": "Extra 5,000 visits or 100 API actions", "price": "€15 + VAT" }
    ],
    "tiers": [
      {
        "name": "The Builder",
        "price": "€999",
        "priceNote": "+ VAT",
        "tagline": "Advanced website built to showcase your services and create a premium first impression.",
        "features": ["Up to 5 Custom Pages", "AI Assistant (Chat functionality)", "5,000 Visits and 50 API actions/month"],
        "support": "Monthly Support €20 + VAT",
        "highlighted": false
      },
      {
        "name": "The Revenue Generator",
        "price": "€1,499",
        "priceNote": "+ VAT",
        "tagline": "Advanced website with sales and payment functionality.",
        "features": ["Secure Payment Processing", "AI Assistant (Chat functionality)", "15,000 Visits and 200 API actions/month"],
        "support": "Monthly Support €20 + VAT",
        "highlighted": true
      },
      {
        "name": "The Secretary",
        "price": "€2,499",
        "priceNote": "+ VAT",
        "tagline": "Your website can become your personal assistant, acting like a digital secretary.",
        "features": ["Online Booking / Reminders", "Secure Payment Processing", "25,000 Visits and 500 API actions/month"],
        "support": "Monthly Support €30 + VAT",
        "highlighted": false
      },
      {
        "name": "The Community",
        "price": "€3,499",
        "priceNote": "+ VAT",
        "tagline": "Membership website built to create a community with secure access.",
        "features": ["Sign-up, Login, Password Reset", "Dedicated Membership Area", "25,000 Visits and 500 API actions/month"],
        "support": "Monthly Support €35 + VAT",
        "highlighted": false
      },
      {
        "name": "The Shop",
        "price": "€4,999",
        "priceNote": "+ VAT",
        "tagline": "Online store built to sell products 24/7 and give you full control of your digital shopfront.",
        "features": ["Full Online Store Setup", "Secure Checkout & Payment", "35,000 Visits and 750 API actions/month"],
        "support": "Monthly Support €40 + VAT",
        "highlighted": false
      },
      {
        "name": "DIY",
        "price": "POA",
        "priceNote": "",
        "tagline": "Custom website built entirely around your vision and goals with tailored functionality.",
        "features": ["Fully Bespoke Design", "Custom Features & Integrations", "Build to Your Specification", "Custom Usage Limits", "AI Assistant (Chat Functionality)"],
        "support": "",
        "highlighted": false
      }
    ]
  }'::jsonb,
  1, 1,
  '["heading", "subheading", "tiers", "common_features", "extras"]'::jsonb
);

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'pricing', 'cta_band', 'pricing-cta-band',
  '{
    "heading": "Not sure which package fits?",
    "subheading": "Tell us what you''re trying to achieve and we''ll point you to the right one.",
    "action_label": "Talk to Us"
  }'::jsonb,
  1, 2,
  '["heading", "subheading", "action_label"]'::jsonb
);

-- ---------- SERVICES (page_order 2) ----------

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'services', 'services_hero', 'services-hero',
  '{
    "eyebrow": "Services",
    "heading": "What we build",
    "subheading": "From a premium showcase site to a full online store, every project is designed around what your business actually needs to grow."
  }'::jsonb,
  2, 0,
  '["eyebrow", "heading", "subheading"]'::jsonb
);

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'services', 'pillars', 'services-pillars',
  '{
    "heading": "Built around how you work",
    "subheading": "Whichever package you choose, it''s designed and built specifically for your business — not a template with your logo dropped in.",
    "pillars": [
      { "title": "Custom Design & Build", "text": "Every site is designed from scratch around your brand, your services, and how your customers actually find and use your business — not a reskinned template." },
      { "title": "Sales & Payments", "text": "Take secure payments directly on your site, whether that''s a one-off purchase, a booking deposit, or a recurring membership fee." },
      { "title": "Booking & Scheduling", "text": "Let customers book appointments or request callbacks straight from your site, with automatic reminders so nothing gets missed." },
      { "title": "Membership & Community", "text": "Give your community a home with secure sign-up, login, and a dedicated members-only area for content, resources, or discussions." },
      { "title": "Full E-Commerce", "text": "A complete online store with secure checkout, so you can sell products 24/7 and manage your digital shopfront with full control." },
      { "title": "AI Assistant", "text": "An AI-powered chat assistant built into your site, ready to answer visitor questions and help turn browsers into customers." }
    ]
  }'::jsonb,
  2, 1,
  '["heading", "subheading", "pillars"]'::jsonb
);

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'services', 'cta_band', 'services-cta-band',
  '{
    "heading": "Tell us what you''re trying to build",
    "subheading": "Every project starts with a conversation about your business, not a template.",
    "action_label": "Get in Touch"
  }'::jsonb,
  2, 2,
  '["heading", "subheading", "action_label"]'::jsonb
);

-- ---------- ABOUT (page_order 3) ----------

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'about', 'about_hero', 'about-hero',
  '{
    "eyebrow": "About Us",
    "heading": "Websites built by people who actually use them",
    "subheading": "We started Scholar Digital Solutions because too many small businesses were stuck with websites they couldn''t update, and no idea whether their site was even working for them."
  }'::jsonb,
  3, 0,
  '["eyebrow", "heading", "subheading"]'::jsonb
);

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'about', 'mission', 'about-mission',
  '{
    "heading": "Our approach",
    "paragraph_1": "We build every website around the business it belongs to — what you sell, how customers find you, and what you actually need it to do. No generic templates, no bloated features you''ll never use.",
    "paragraph_2": "Every site comes with Scholar Dashboard built in, so once your site is live, you''re not stuck waiting on us for every small change. You can edit your own content and see how your site is performing, any time."
  }'::jsonb,
  3, 1,
  '["heading", "paragraph_1", "paragraph_2"]'::jsonb
);

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'about', 'cta_band', 'about-cta-band',
  '{
    "heading": "Let''s build something for your business",
    "subheading": "Get in touch and tell us what you''re working with.",
    "action_label": "Contact Us"
  }'::jsonb,
  3, 2,
  '["heading", "subheading", "action_label"]'::jsonb
);

-- ---------- CONTACT (page_order 4) ----------

insert into public.content (site_key, page, section, key, published, page_order, section_order, field_order)
values (
  'scholar', 'contact', 'contact_hero', 'contact-hero',
  '{
    "eyebrow": "Contact",
    "heading": "Let''s talk about your website",
    "subheading": "Tell us a bit about your business and what you''re hoping to achieve, and we''ll get back to you with next steps."
  }'::jsonb,
  4, 0,
  '["eyebrow", "heading", "subheading"]'::jsonb
);
