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
  lastCommit: '2026-11-11T01:23:35Z'
latestRelease:
  tag: v1.7.0-dev
  name: Backup Release
  publishedAt: '2022-01-07T22:26:40Z'
  url: 'https://github.com/KrossX/pcsx2/releases/tag/v1.7.0-dev'
activity:
  lastSynchronized: '2026-11-25T22:34:07.718Z'
automation:
  sync: true
  github:
    repoEtag: W/"afef5004a4dd3909d94bb40e12f74b7f995a0b50ee721840c70bb583b486ed59"
    releasesEtag: W/"e8b68d87f6835115000e1faff89843c3f35acd194e3bcffe1e78f1a5dd1f2ad6"
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
