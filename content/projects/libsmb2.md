---
name: libsmb2
slug: libsmb2
summary: >-
  Userspace SMB2/SMB3 client library ported to PlayStation 2 for connecting to
  modern network shares in homebrew loaders.
categories:
  - libraries
  - networking
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: sahlberg/libsmb2
  repositoryId: '78067447'
  url: 'https://github.com/sahlberg/libsmb2'
repository:
  archived: false
  defaultBranch: master
  stars: 433
  forks: 212
  lastCommit: '2026-10-22T23:15:35Z'
latestRelease:
  tag: libsmb2-6.3
  name: libsmb2-6.3
  publishedAt: '2026-10-21T22:10:48Z'
  url: 'https://github.com/sahlberg/libsmb2/releases/tag/libsmb2-6.3'
activity:
  lastChecked: '2026-09-29T00:27:41.566Z'
  lastSynchronized: '2026-10-24T14:34:02.382Z'
automation:
  sync: true
  github:
    repoEtag: W/"97932294460016f1292685069063bcbe6645f8443b2b94337e471938129a6f52"
    releasesEtag: W/"f4a03c1cfabb2ae7811749c1bbc4f1a136e5ac736a8ceb01aa0d0f214709d665"
discovery:
  method: 'pending-promotion:github-search'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - native build files present
    - repository has a PS2-specific branch
    - repository pushed within the last 180 days
  maturity: active-unreleased
verified: false
featured: false
hidden: false
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
