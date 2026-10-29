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
  lastCommit: '2026-10-25T10:08:35Z'
latestRelease:
  tag: libsmb2-6.3
  name: libsmb2-6.3
  publishedAt: '2026-10-21T22:10:48Z'
  url: 'https://github.com/sahlberg/libsmb2/releases/tag/libsmb2-6.3'
activity:
  lastChecked: '2026-09-29T00:27:41.566Z'
  lastSynchronized: '2026-10-29T14:21:05.055Z'
automation:
  sync: true
  github:
    repoEtag: W/"b2bdfa6f0d19e291d5c224b4e2ccf3d424eb169fa5319021c3ae0ffbf9bbc933"
    releasesEtag: W/"780e1df3b5a65c7bac74a1bdeb9281bffda484a56de223bcabc3b5ce098432fb"
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
