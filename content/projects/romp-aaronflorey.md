---
name: RomP
slug: romp-aaronflorey
summary: 'Natively run your RomM library games! On Windows, Linux, and macOS'
categories:
  - host-tools
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://rompemu.github.io'
source:
  provider: github
  repository: aaronflorey/RomP
  repositoryId: '1439293917'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-31T04:47:46Z'
latestRelease:
  tag: nightly
  name: Nightly
  publishedAt: '2026-10-31T04:47:46Z'
  url: 'https://github.com/aaronflorey/RomP/releases/tag/nightly'
activity:
  lastSynchronized: '2026-10-31T05:42:45.982Z'
automation:
  sync: true
  github:
    repoEtag: W/"21ff3bd6127d45bf919a474d9d12e6941c262bbe3fbd846de97ce084dbbf4b3a"
    releasesEtag: W/"3b876ac510b39cac9d37a9eed1ac5ef8ccf83a2fc6b50ca795ffac027360410f"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: RompEmu/RomP'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: RompEmu/RomP
  source: RompEmu/RomP
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
