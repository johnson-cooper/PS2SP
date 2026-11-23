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
  lastSynchronized: '2026-11-23T21:26:32.468Z'
automation:
  sync: true
  github:
    repoEtag: W/"fd9ccb8be7d4588c4226cb14815d35b3055235d8a1577bf7f93f86ec6ef9cd7e"
    releasesEtag: '"6e65b14bdb08620358be0d4901cc82f759a4b9eab636320fe66bc13ccedb04ad"'
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
