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
  lastSynchronized: '2026-10-24T11:01:12.886Z'
automation:
  sync: true
  github:
    repoEtag: W/"0a4e977b93934afee66ee6b9c807e82097fb9ec0072a6fa556817e8f7d2ff10b"
    releasesEtag: '"2d8126faf7d60a088ad7a14f528f5a8f3ca919b5cd485e0f97d8ebb20b5102f0"'
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
