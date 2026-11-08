---
name: mymc_web
slug: mymc-web-warksmith
summary: Web interface to manage PCSX2 .ps2 memory card images
categories:
  - save-tools
  - host-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: 'https://warksmith.github.io/mymc_web/'
source:
  provider: github
  repository: Warksmith/mymc_web
  repositoryId: '1447624235'
repository:
  archived: false
  defaultBranch: mcd-card-support
  stars: 0
  forks: 0
  lastCommit: '2026-11-06T05:14:41Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T07:21:31.195Z'
automation:
  sync: true
  github:
    repoEtag: W/"06fa80d7fcb9f3fe8f94663a81c6d5a2ccd3596cc6ffddcec4e9e9073e30c654"
    releasesEtag: '"d74739b5b55bb7861259cdc7802b48f20c2b7cb51c27157df555e44d97bb176d"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: BAD-AL/mymc_web'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: BAD-AL/mymc_web
  source: BAD-AL/mymc_web
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
