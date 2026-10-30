---
name: ico-pc
slug: ico-pc-valdiakun
summary: >-
  PC and Android port of the ICO (PS2) decompilation (nathanialf/ico): Windows,
  Linux, Steam Deck and Android (experimental). Contains no game data.
categories:
  - preservation
  - development
  - ports
  - games
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: ValdiaKun/ico-pc
  repositoryId: '1412582135'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-11T05:37:45Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-30T19:23:01.631Z'
automation:
  sync: true
  github:
    repoEtag: W/"e93deeafada584454f785c8eaf640c319c27c7f610b837436c7b8f3b900f31a2"
    releasesEtag: '"4e5a0754123e150edd35f63c077b092fc8acf1f99673343fdbd321eefe2fd689"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: nathanialf/ico-pc'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: nathanialf/ico-pc
  source: nathanialf/ico-pc
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
