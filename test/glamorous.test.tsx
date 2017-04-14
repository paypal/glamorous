import glamorous from "../";

glamorous.svg({
  fill: 'blue'
})


// static styles
const MyStyledDiv = glamorous.div({
  fontSize: 20,
  textAlign: 'center',
});

// dynamic styles
const Title = glamorous.h1({
  fontSize: '10px'
}, (props: { color: string; }) => ({
  color: props.color,
}));

// theme styles
const Divider = glamorous.span({
  fontSize: '10px'
}, (props, theme: { main: { color: string; }}) => ({
  color: theme.main.color,
}));
