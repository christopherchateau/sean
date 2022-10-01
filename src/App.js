import Header from './components/Header'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Headshot from './assets/closeup.png'
import './App.css'

const banners = [
	{
		name: 'about',
		headline: "I've hated them for a really long time",
		text: [
			"The Law Office of Sean C. Thomson was founded upon one idea: that individuals charged with a crime need representation that is more zealous, more diligent, and more dynamic than the government which seeks to take away that individual's freedom.",
			'Sean C. Thomson has seen firsthand the pressure that the government can bring to bear on an individual that it believes has violated a law. The fight alone can be too much to stand for a person without a strong advocate. The consequences that could follow such an uneven fight can alter a life forever...',
			'Sean has dedicated himself to never letting his clients face the biggest trial of their lives without an advocate who will fight harder, fight longer, and fight in more ways than the government will. By taking the fight to the government, Sean protects his clients and their futures from potentially devastating consequences.',
		],
	},
	{
		name: 'areas-of-practice',
		headline: 'Areas of Practice',
		subHeadline:
			'Julia has the experience to handle any case, but is renowned and specialized in these areas of law:',
	},
	{
		name: 'bio',
		headline: 'Sean C Thomson',
		text:["Cheeseburger roquefort everyone loves. Caerphilly manchego cheese triangles mozzarella st. agur blue cheese feta taleggio pepper jack. Jarlsberg cheese slices gouda jarlsberg swiss cheesy grin parmesan cheddar. Parmesan caerphilly cheese strings mozzarella cheesy grin fromage frais caerphilly danish fontina. Cheeseburger cheeseburger cheese and biscuits parmesan cheese on toast cheese strings mascarpone chalk and cheese. Melted cheese pepper jack queso cut the cheese hard cheese gouda melted cheese fondue. Fromage frais rubber cheese boursin smelly cheese.Hard cheese mozzarella blue castello. Red leicester cheese and biscuits danish fontina lancashire cut the cheese croque monsieur camembert de normandie queso. Who moved my cheese cheese on toast port-salut parmesan boursin caerphilly fromage babybel. Cheese triangles when the cheese comes out everybody's happy croque monsieur cheeseburger who moved my cheese melted cheese who moved my cheese everyone loves. Cow cheeseburger macaroni cheese swiss when the cheese comes out everybody's happy cheese and biscuits melted cheese danish fontina. Everyone loves jarlsberg monterey jack bocconcini st. agur blue cheese blue castello hard cheese."],
		textImage: Headshot,
	},
	// {
	// 	name: 'contact',
	// 	headline: 'Contact'
	// }
]

const App = () => {
	const refs = []

	const addRef = ref => {
		refs.push(ref)
	}

	const executeScroll = ref => ref.current.scrollIntoView()

	return (
		<div className='App'>
			<Header {...{ executeScroll, refs }} />
			<Hero />

			{banners.map(
				({ name, headline, subHeadline, text, textImage }, i) => (
					<Banner
						{...{
							name,
							text,
							addRef,
							headline,
							textImage,
							subHeadline,
							key: i,
						}}
					/>
				)
			)}
		</div>
	)
}

export default App
