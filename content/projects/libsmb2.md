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
  stars: 431
  forks: 209
  lastCommit: '2026-10-05T22:09:21Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastChecked: '2026-09-29T00:27:41.566Z'
  lastSynchronized: '2026-10-07T14:34:14.343Z'
automation:
  sync: true
  github:
    repoEtag: W/"d32fcc53d172b7512a463d8199e017d4c1d7c857bbeb7377a45e50815d2a2c12"
    releasesEtag: '"a8b72fc23874e1701b2920e2e37cd2ca4913fb4b114fa3cba3efba72e700fa11"'
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
