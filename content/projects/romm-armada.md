---
name: romm-armada
slug: romm-armada
summary: >-
  Decky Loader plugin for Arm64 handhelds: download RomM games and sync PS2
  saves, with the experiments behind it
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: abduznik/romm-armada
  repositoryId: '1433520951'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-04T07:03:20Z'
latestRelease:
  tag: v0.4.1
  name: RomM Armada 0.4.1
  publishedAt: '2026-11-04T07:03:20Z'
  url: 'https://github.com/abduznik/romm-armada/releases/tag/v0.4.1'
activity:
  lastSynchronized: '2026-11-13T00:26:19.157Z'
automation:
  sync: true
  github:
    repoEtag: W/"faed0f1d3be1779b9791fb577fbcee4543c097d914fc99904b4482c15a82409d"
    releasesEtag: W/"cb3b7eba9b294dbe9549664ad84e77bcd36e2608560d49b49b60016a5792708d"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
