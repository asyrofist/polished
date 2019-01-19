// @flow
import lighten from '../lighten'

describe('lighten', () => {
  it('should lighten a color by 10%', () => {
    expect(lighten(0.1, '#444')).toMatchSnapshot()
  })

  it('should lighten a hex color by 20%', () => {
    expect(lighten(0.2, '#CCCD64')).toMatchSnapshot()
  })

  it('should lighten an 8-digit hex color by 20%', () => {
    expect(lighten(0.2, '#6564CDB3')).toMatchSnapshot()
  })

  it('should lighten an 4-digit hex color by 20%', () => {
    expect(lighten(0.2, '#0f08')).toMatchSnapshot()
  })

  it('should lighten a color with opacity by 20%', () => {
    expect(lighten(0.2, 'rgba(101,100,205,0.7)')).toMatchSnapshot()
  })

  it('should lighten a color but not go beyond 255', () => {
    expect(lighten(0.8, 'rgba(255,200,200,0.7)')).toMatchSnapshot()
  })

  it('should lighten a color when passed a string for amount', () => {
    expect(lighten('0.1', '#444')).toMatchSnapshot()
  })

  it('should return transparent when passed transparent', () => {
    expect(lighten('0.1', 'transparent')).toMatchSnapshot()
  })
})
