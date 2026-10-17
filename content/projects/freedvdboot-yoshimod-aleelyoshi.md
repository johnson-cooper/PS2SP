---
name: FreeDVDBoot-YoshiMod
slug: freedvdboot-yoshimod-aleelyoshi
summary: PlayStation 2 DVD Player Exploit
categories:
  - boot-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: aleelyoshi/FreeDVDBoot-YoshiMod
  repositoryId: '1391223456'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2026-09-29T17:46:19Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-17T19:24:39.387Z'
automation:
  sync: true
  github:
    repoEtag: W/"284a15122cd2c9cb1d73b1b46777a8e21652a66767c4f84bb5a1345c4ef09fc3"
    releasesEtag: '"bcbb9456270ba23e1365e1daa35a0f37d35ce04dc4ed3bd2b448dfedec33e05e"'
discovery:
  method: 'incremental:topic:ps2'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
