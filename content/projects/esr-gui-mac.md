---
name: esr-gui-mac
slug: esr-gui-mac
summary: Mac app to ESR-patch PS2 DVD backup ISOs so they boot on a PS2 via ESR
categories:
  - loaders
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: giancoppola/ESR-Patcher-for-Mac
  repositoryId: '1422431003'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-16T16:57:08Z'
latestRelease:
  tag: v0.1.0
  name: ESR Patcher for Mac v0.1.0
  publishedAt: '2026-10-16T16:58:11Z'
  url: 'https://github.com/giancoppola/ESR-Patcher-for-Mac/releases/tag/v0.1.0'
activity:
  lastSynchronized: '2026-11-04T01:21:51.322Z'
automation:
  sync: true
  github:
    repoEtag: W/"f0bcf9732f4c9f9933d41632040396bc5d5f2b1e8174ee846c4f1266ddcf8abb"
    releasesEtag: W/"079e12386ed94d9a70ec313784f4879da9ad0af6d6092a077377ee443b3f4d58"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README identifies PS2 homebrew
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
