---
name: libsmb2-SwiftSMB
slug: libsmb2-swiftsmb-ruinelson
summary: SMB2/3 userspace client
categories:
  - libraries
  - networking
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: RuiNelson/libsmb2-SwiftSMB
  repositoryId: '1464257288'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-19T16:13:16Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-24T06:04:42.752Z'
automation:
  sync: true
  github:
    repoEtag: W/"428dac47ae7c553d9b035310e799de22c666c679e7c3169e5e7a349c12e7c702"
    releasesEtag: '"1225e3926759f2117b9a830704182986e371cb3e544c44a80269ecddea7b4787"'
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sahlberg/libsmb2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: sahlberg/libsmb2
  source: sahlberg/libsmb2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
