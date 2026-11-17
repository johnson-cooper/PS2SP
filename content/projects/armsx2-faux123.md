---
name: ARMSX2
slug: armsx2-faux123
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
  repository: faux123/ARMSX2
  repositoryId: '1457988100'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-11-14T21:48:53Z'
latestRelease:
  tag: panvk-roaa-test1
  name: PanVK ROAA auto-detect test 1
  publishedAt: '2026-11-14T21:49:07Z'
  url: 'https://github.com/faux123/ARMSX2/releases/tag/panvk-roaa-test1'
activity:
  lastSynchronized: '2026-11-17T22:24:13.123Z'
automation:
  sync: true
  github:
    repoEtag: W/"f7a72a8113d74156b25dd1c42e5e61f87b69c66eec2aab46b88b9a883f0f92ba"
    releasesEtag: W/"8d18659184b4d084fd34fd3fd5ac7c0b8b2096617e9ed9ce6d39a8a101ebbade"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
