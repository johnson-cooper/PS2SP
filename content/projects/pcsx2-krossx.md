---
name: pcsx2
slug: pcsx2-krossx
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
  repository: KrossX/pcsx2
  repositoryId: '192447569'
repository:
  archived: false
  defaultBranch: master
  stars: 4
  forks: 0
  lastCommit: '2026-10-25T00:59:17Z'
latestRelease:
  tag: v1.7.0-dev
  name: Backup Release
  publishedAt: '2022-01-07T22:26:40Z'
  url: 'https://github.com/KrossX/pcsx2/releases/tag/v1.7.0-dev'
activity:
  lastSynchronized: '2026-11-04T22:41:09.823Z'
automation:
  sync: true
  github:
    repoEtag: W/"0ece137f9266b994c3eaf94752edf1f0770771486199484df72fcb60970d31ee"
    releasesEtag: W/"2cbe60d5e62559aa575d317fb2e997fcc9c85b005092b1bb45ff6488defc0c1e"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
