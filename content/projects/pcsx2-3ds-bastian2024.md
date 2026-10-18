---
name: pcsx2-3ds
slug: pcsx2-3ds-bastian2024
summary: ClownStation - The PlayStation 2 Emulator for (New) Nintendo 3DS systems
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://discord.gg/HVJ2VXCVk3'
source:
  provider: github
  repository: Bastian2024/pcsx2-3ds
  repositoryId: '1192147988'
repository:
  archived: false
  defaultBranch: master
  stars: 3
  forks: 0
  lastCommit: '2026-10-14T23:23:37Z'
latestRelease:
  tag: Pineapple
  name: 0.0.07 - The last of the 0.0.0x series
  publishedAt: '2026-07-20T18:53:53Z'
  url: 'https://github.com/Bastian2024/pcsx2-3ds/releases/tag/Pineapple'
activity:
  lastSynchronized: '2026-10-18T05:54:49.833Z'
automation:
  sync: true
  github:
    repoEtag: W/"6fd3701faa8edcb27ed6c3522d41ed2ffb7406fda690fc449c5632b832f4ede5"
    releasesEtag: W/"37a4d7eea9d724bb2a63bba618895da6b2732b75e0df235ce2d6c09ac5dfec4f"
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
