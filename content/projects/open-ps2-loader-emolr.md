---
name: Open-PS2-Loader
slug: open-ps2-loader-emolr
summary: Game and app loader for Sony PlayStation 2
categories:
  - loaders
tags:
  - opl
  - hdloader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - mx4sio
authors: []
license: AFL-3.0
homepage: 'https://ps2homebrew.github.io/Open-PS2-Loader/'
source:
  provider: github
  repository: emolr/Open-PS2-Loader
  repositoryId: '613745190'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2023-03-16T11:12:13Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2023-03-16T11:12:14Z'
  url: 'https://github.com/emolr/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-17T13:44:18.732Z'
automation:
  sync: true
  github:
    repoEtag: W/"019b47f435c163e712af210dc963f446719f27184095e61b60c664dacbb752d6"
    releasesEtag: W/"c2ed68cc32b92939d3dc15c74fba8e830835173d900f7c290ce429d4d8dd68af"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
