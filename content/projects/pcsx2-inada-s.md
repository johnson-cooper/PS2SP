---
name: pcsx2
slug: pcsx2-inada-s
summary: PCSX2 - The Playstation 2 Emulator
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'http://pcsx2.net/'
source:
  provider: github
  repository: inada-s/pcsx2
  repositoryId: '249261147'
repository:
  archived: false
  defaultBranch: zdxsv-master
  stars: 2
  forks: 0
  lastCommit: '2026-11-19T12:36:24Z'
latestRelease:
  tag: zdxsv-1.0.4
  name: zdxsv-1.0.4
  publishedAt: '2026-11-17T10:43:37Z'
  url: 'https://github.com/inada-s/pcsx2/releases/tag/zdxsv-1.0.4'
activity:
  lastSynchronized: '2026-11-19T13:08:10.983Z'
automation:
  sync: true
  github:
    repoEtag: W/"b6d4aacf3741579d101634a835320ad85371a562914afda580cd1ba7667c8e36"
    releasesEtag: W/"67efc6ffd5b6c7598a935e5ff68ec0f56c07f30481d7be04c16d404d54eecd8a"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
