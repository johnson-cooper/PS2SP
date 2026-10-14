---
name: protopwn
slug: protopwn-calos9999
summary: >-
  An exploit for the Protokernel PlayStation 2 systems (SCPH-10000, SCPH-15000,
  and DTL-H10000(S)) that enables arbitrary code execution through a flaw in the
  OSDSYS Browser update code.
categories:
  - boot-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: AFL-3.0
homepage: null
source:
  provider: github
  repository: calos9999/protopwn
  repositoryId: '1000351837'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2025-06-11T16:14:12Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-14T11:53:27.296Z'
automation:
  sync: true
  github:
    repoEtag: W/"f831a5329b00be30ae0dfb08f1f1210613a05607bf5adcf85fe8d84792222b60"
    releasesEtag: '"f5cbfb9c0ea79c690dbfcd976d9e6f937284afb4db33e0fbea82f00d1e4ce261"'
discovery:
  method: 'fork-network:pcm720/protopwn'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: pcm720/protopwn'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: pcm720/protopwn
  source: pcm720/protopwn
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
