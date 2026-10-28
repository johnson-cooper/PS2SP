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
  lastSynchronized: '2026-10-28T01:23:05.277Z'
automation:
  sync: true
  github:
    repoEtag: W/"78f03a8b45d15a9110902fb9b4161262b51b2319a25a39261f2e1f7ca87bfa48"
    releasesEtag: W/"c28d5dfd05999049ca7fcfe56e36ff455b23aa888efb215d7a837454cfb78278"
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
