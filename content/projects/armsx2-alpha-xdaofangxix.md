---
name: ARMSX2-Alpha
slug: armsx2-alpha-xdaofangxix
summary: ARMSX2 - The Playstation 2 Emulator for ARM64 Platforms
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://armsx2.net/'
source:
  provider: github
  repository: XDaoFangxiX/ARMSX2-Alpha
  repositoryId: '1327159727'
repository:
  archived: false
  defaultBranch: testing-dev-plus
  stars: 10
  forks: 0
  lastCommit: '2026-10-19T08:46:46Z'
latestRelease:
  tag: 2.9.7-build.48
  name: Alpha 2.9.7-build.48
  publishedAt: '2026-10-19T08:46:57Z'
  url: 'https://github.com/XDaoFangxiX/ARMSX2-Alpha/releases/tag/2.9.7-build.48'
activity:
  lastSynchronized: '2026-11-03T15:08:16.544Z'
automation:
  sync: true
  github:
    repoEtag: W/"5c070eabfb391bdbd8a94bf27fb9c91cba13387e1c8474c14cbff59e0c6ed893"
    releasesEtag: W/"c72ced81897d286c0f2534a0e9bafedf51dc27bb6e5c193dbbc0dd63c4e50c5c"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
