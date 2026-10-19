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
  stars: 432
  forks: 211
  lastCommit: '2026-10-19T08:32:00Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastChecked: '2026-09-29T00:27:41.566Z'
  lastSynchronized: '2026-10-19T14:41:37.352Z'
automation:
  sync: true
  github:
    repoEtag: W/"78d6a78321b1032652a2aa9189ce2f736acd5a7d8f058db3e604278889eadd0f"
    releasesEtag: '"1474211309c9dbcbb93bb9a0d25d66c80bd12d58effff574e673d3f6cebe58ae"'
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
