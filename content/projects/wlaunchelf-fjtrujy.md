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
  lastSynchronized: '2026-10-13T00:41:05.902Z'
automation:
  sync: true
  github:
    repoEtag: W/"f905542eaa83a5ca834b5a6231414d8ffbb3b096297aec9f8f4304f9eba1631a"
    releasesEtag: W/"436247d267af199dfd13558ff36f46bbf7e85eb9976775319868f543d89f8f28"
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
