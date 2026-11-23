---
name: wLaunchELF
slug: wlaunchelf-fjtrujy
summary: ELF loader and File browser for Sony PlayStation 2
categories:
  - file-managers
  - launchers
tags:
  - wlaunchelf
  - ulaunchelf
  - elf
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - memory-card
authors: []
license: null
homepage: null
source:
  provider: github
  repository: fjtrujy/wLaunchELF
  repositoryId: '322238616'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2021-08-01T18:09:37Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2020-12-17T09:08:06Z'
  url: 'https://github.com/fjtrujy/wLaunchELF/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-23T00:56:21.917Z'
automation:
  sync: true
  github:
    repoEtag: W/"10df7b51c1b2cafdc75bb6f8e0c17e8aafdefe850220f7cbac0f56cd8ec21735"
    releasesEtag: W/"6a26bff6c587c94890861f70aa7d7e0fbe1b44eed3a10083f01f8c285008d7aa"
discovery:
  method: 'fork-network:ps2homebrew/wLaunchELF'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/wLaunchELF'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/wLaunchELF
  source: ps2homebrew/wLaunchELF
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
