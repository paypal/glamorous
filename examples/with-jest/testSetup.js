import {matcher, serializer} from 'jest-glamor-react'

// This is what adds the CSS to the output snapshot
expect.addSnapshotSerializer(serializer)

// this adds toMatchSnapshot to expect and makes the snapshot diff output look nice in the terminal
expect.extend(matcher)