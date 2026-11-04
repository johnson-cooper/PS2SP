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
  lastSynchronized: '2026-11-04T01:22:35.536Z'
automation:
  sync: true
  github:
    repoEtag: W/"ddb02512df464087bdfd47c662d8d6d223b061c6ec806af35b9c8b04758c7e69"
    releasesEtag: W/"d3e5a6854a6fc3f356667b5756b6828afcb635157e8c3496d374063d80dad957"
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
