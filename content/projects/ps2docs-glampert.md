---
name: PS2Docs
slug: ps2docs-glampert
summary: Sony PlayStation 2 developer documentation.
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: glampert/ps2docs
  repositoryId: '1425059196'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2026-10-19T23:48:31Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T15:14:33.669Z'
automation:
  sync: true
  github:
    repoEtag: W/"bec3793034739ce8372d98e4e30a37e0f9d891b7e6981f6f2064e3736c42d8c2"
    releasesEtag: '"92e2f2afde06cfa79fae294d94e1123ac5d56a202679866d4fecc6991c5d3df0"'
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ninjadynamics/PS2Docs'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: ninjadynamics/PS2Docs
  source: ninjadynamics/PS2Docs
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
