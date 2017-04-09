import {matcher, serializer} from 'jest-glamor-react'

expect.addSnapshotSerializer(serializer)
expect.extend(matcher)