---
name: OSD-Initialization-Libraries
slug: osd-initialization-libraries-akuhak
summary: >-
  Reverse-engineered Sony OSD initialization libraries used to build custom
  dashboards and browser replacements on PS2.
categories:
  - libraries
  - dashboards
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: AKuHAK/OSD-Initialization-Libraries
  repositoryId: '501688471'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2023-05-21T12:41:32Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2022-06-09T15:36:28Z'
  url: 'https://github.com/AKuHAK/OSD-Initialization-Libraries/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-11T01:54:40.845Z'
automation:
  sync: true
  github:
    repoEtag: W/"bf53a06d5d250c3010db803255cefe6114d9283c4d848494b89253374d32a905"
    releasesEtag: W/"86ff01780c9564db34e6bce29a6871e3e6d4db81e9bff67892c24ba371634e78"
discovery:
  method: 'fork-network:ps2homebrew/OSD-Initialization-Libraries'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      ps2homebrew/OSD-Initialization-Libraries
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/OSD-Initialization-Libraries
  source: ps2homebrew/OSD-Initialization-Libraries
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
