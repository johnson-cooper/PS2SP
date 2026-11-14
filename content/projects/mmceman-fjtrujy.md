---
name: mmceman
slug: mmceman-fjtrujy
summary: >-
  IOP kernel modules and manager for MMCE hardware devices on PlayStation 2,
  enabling memory card switching and Game ID integration.
categories:
  - hardware
  - drivers
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: fjtrujy/mmceman
  repositoryId: '1174850255'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-03-06T23:44:29Z'
latestRelease:
  tag: latest
  name: Latest mmceman IRX driver
  publishedAt: '2026-03-06T23:44:30Z'
  url: 'https://github.com/fjtrujy/mmceman/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-14T03:16:10.490Z'
automation:
  sync: true
  github:
    repoEtag: W/"4d659d446ebd892af39df406a73135743182e63292b66c5ea2417fed6e61e9b7"
    releasesEtag: W/"f18162234ee57de2370006fedae0d1e028b92c5ad8a25ee4529601654c56138b"
discovery:
  method: 'fork-network:ps2-mmce/mmceman'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2-mmce/mmceman'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2-mmce/mmceman
  source: ps2-mmce/mmceman
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
