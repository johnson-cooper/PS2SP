---
name: osdbits-wasm
slug: osdbits-wasm-havaianasdestruido
summary: parts of the Playstation2's OSDSYS reverse engineered
categories:
  - dashboards
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: 'https://havaianasdestruido.github.io/osdbits-wasm/'
source:
  provider: github
  repository: havaianasdestruido/osdbits-wasm
  repositoryId: '1441156622'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-31T21:54:31Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-31T21:53:36.436Z'
automation:
  sync: true
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: aap/osdbits'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: aap/osdbits
  source: aap/osdbits
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
