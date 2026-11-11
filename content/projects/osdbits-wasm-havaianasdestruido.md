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
  lastCommit: '2026-11-01T13:54:03Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-11T21:59:15.611Z'
automation:
  sync: true
  github:
    repoEtag: W/"38f042f0ddb7c1454e8e55d9bf951021453fb21125f78462d19d9cae10333444"
    releasesEtag: '"5aa280d5753d4dbff4bf4150cd345cf8a7f1e277f73d42d2b759639db73dc321"'
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
