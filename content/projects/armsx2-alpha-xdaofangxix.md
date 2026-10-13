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
  stars: 3
  forks: 0
  lastCommit: '2026-10-13T00:21:04Z'
latestRelease:
  tag: 2.9.4-build.45
  name: Alpha 2.9.4-build.45
  publishedAt: '2026-10-09T00:39:13Z'
  url: 'https://github.com/XDaoFangxiX/ARMSX2-Alpha/releases/tag/2.9.4-build.45'
activity:
  lastSynchronized: '2026-10-13T15:59:02.100Z'
automation:
  sync: true
  github:
    repoEtag: W/"2349170310a87433382da02d67a516e7b119cf9a6570993022a1d5fe33953574"
    releasesEtag: W/"f3f53969ffb92af3275acce353749e6dc35e4c4e2dc9e4bbde93fecf09a5f9a5"
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
