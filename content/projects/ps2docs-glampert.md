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
  lastSynchronized: '2026-11-01T15:10:55.855Z'
automation:
  sync: true
  github:
    repoEtag: W/"9920c99e3ba1fc4f9c70c78847355c02c311f04bb32829d601d522855104dcd1"
    releasesEtag: '"ad77fe11f72b65d0026fedb2545459954fd125a98ebe703c07954f3273e8f4aa"'
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
