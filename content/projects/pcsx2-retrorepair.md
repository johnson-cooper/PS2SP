---
name: pcsx2
slug: pcsx2-retrorepair
summary: PCSX2 - The Playstation 2 Emulator (GroovyNLC)
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://pcsx2.net'
source:
  provider: github
  repository: retrorepair/pcsx2
  repositoryId: '1403685418'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-13T16:11:25Z'
latestRelease:
  tag: v2026.10.13
  name: PCSX2 GroovyNLC v2026.10.13
  publishedAt: '2026-10-13T16:11:26Z'
  url: 'https://github.com/retrorepair/pcsx2/releases/tag/v2026.10.13'
activity:
  lastSynchronized: '2026-11-01T23:37:17.183Z'
automation:
  sync: true
  github:
    repoEtag: W/"31822cd768509f50c0d815c57f4430dceedebb3edad1603bc647ce57ef7b6c74"
    releasesEtag: W/"bf04dbb106b675f02edafbe51e00c37c51cd20f069a6ab8480ba82c26bed8e5a"
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
  forkOf: verbst/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
