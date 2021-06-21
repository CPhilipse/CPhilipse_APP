import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './evidenceforjesus.style';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Page from './components/Page';

interface Props {
  darkmode: boolean;
  navigation: any;
}

const EvidenceForJesus = ({darkmode, navigation}: Props) => {
  const opacity = useSharedValue(0);

  const styleOpacity = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    'worklet';
    opacity.value = withRepeat(
      withTiming(1, {
        duration: 1500,
      }),
      -1,
      true,
    );
  }, [opacity]);

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <ScrollView>
        <Text style={[styles.headerTitle, color(darkmode)]}>
          Evidence for the historical Jesus
        </Text>
        <Page
          darkmode={darkmode}
          title={'Is the story of Jesus historically accurate?'}
          body={
            'And if Jesus really rose from the dead to prove He is God, would you follow Him?\n\n'
          }
          styleOpacity={styleOpacity}
          showSwipeIndication
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'Historical sources'}
          body={
            "There are 2 historians that are of significant value in regards to Jesus' existence and death; \n\nTacitus\nHis written documents verify Jesus' crucifixion under Tiberius and Pontius Pilate. [see original]\n\nFlavius Josephus\nHe has written the Antiquities of the Jews. He verifies through Antiquites 20.200 that the brother of Jesus, James, has been stoned to death. [see original] Through his work the Antiquities 18:63 he verifies that Jesus has been condemned to be crucified by Pontius Pilate. [see original]\n\nOther historians\nThallus, Mara Bar-serapion, Phelgon, Babylonian Talmud, Suetonius, Pliny the Younger and Lucian of Samosata are all historians who mention Jesus in their work. It is remarkable to discover that not one of all of these historical documents that have been found doubt Jesus' His existence.\n\nThe New Testament\nThe New Testament is incredible since over 5600 manuscripts have been found, more than any other historical story. The earliest manuscripts for the New Testament are months from the resurrection event. Which is incredible evidnece, because take for example Alexander de Groot, historical manuscripts have been found of him 400 years after his supposed existence and he is considered a historical figure in most history books. The same can be said for Julius Ceasar, the amount of historical evidence for Jesus is so overwhelmingly more than any other historical figure. Yet Jesus is not found in most history books. Most scholars count [NT books, chapters or verses] as reliable."
          }
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={
            'Verifying characters, places and events of the eyewitness testimonies'
          }
          body={
            "To verify whether the writers of the New Testament are telling a true story can be done by verifying elements of it. Let's see what elements are verified to be true.\n\nPontius Pilate\nThe man who has condemned Jesus to be crucified. He has been verified to be a historical figure through historians as Pliny the Younger, Josephus, Tacitus and the Gospels. Also is there archeological evidence proofing he is a historical figure. Namely: a copper ring with the inscription 'of Pilate' and a stone which has the inscription 'Pilate' have been found.\n\nYehosef Bar Caiaphas\nThis person is a high priest who is famous for his involvement with the crucifixion of Jesus. He has been mentioned in the New Testament (Matt. 26:3, 57; Luke 3:2; John 11:49; 18:13-14, 24, 28; Acts 4:6). There has been found a bone box (some sort of grave) of a relative of this high priest which has the inscription 'Yehosef bar Qafa' which means 'Joseph son of Caiaphas'. The historian Josephus also talks about this relative Joseph Caiaphas in Antiquities XVIII.33-35. All this verifies the historical figure Caiaphas. [see original]\n\nThe eclips\nThere is historical evidence that supports the eclips described in [...verse in NT...]. ...\n\nRoman crucifixions\nThere is both historical and archeological evidence for the claim that there were crucifixion around the time of Jesus...\n\nJesus hometown\n...\n\nGolgotha\n...\n\nConclusion\nThese verified elements corroborate the reliability of the New Testament more and more."
          }
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={"Most popular popular 'contradictions' debunked"}
          body={
            "Certain historian specialists like Bart Ehrman believe the New Testament to be false on the resurrection because of the pieces of text that they see as 'contradictions'. Let's see why or why not these pieces are contradictions.\n\n#1How many women were at the tomb?\nJohn 20:1 says Mary Magdalene came to the tomb. Matthew 28:1 says both Mary Magdalene and the other Mary went to the tomb. Luke says Mary Magdalene, Joanna, Mary the mother of James and the other women went to the tomb. Looking at this you can understand why skeptics would point these out. But Luke explicitly says that there were others that he didn't name. In no gospel did it say these were the only women or people who came to the tomb. An example by Frank Turek, he says \"If I say I went to the store with my wife last night. I'm not automatically excluding the fact that I brought my four kids with me. I just left out a detail. So what\".\n\n#2 Was the tomb opened or closed when the women arrived?\nMark 16:3-4, Luke 24:2 and John 20:1 state that the stone was already rolled away when the women came to the tomb. Now Matthew 28:1-4 says the women came, but Matthew adds with a explanation to the earthquake and set of circumstances as the women found the tomb. Some think Matthew is saying the women saw the stone before the tomb and the explanation Matthew gives on the earthquake is to how it was removed. But Matthew isn't claiming that the women saw the angel descend or that they saw the guard getting knocked out. Matthew only explains how the women found the tomb with the stone rolled away by describing the circumstances which he could've gotten from one of the guards themselves, since we find out that the author had some info about the guards (in Matthew 28:11:15). So the stone moved before they got there, and that seems to be what Matthew is communicating when properly read.\n\n#3 Did the women at the tomb of Jesus see a man at the tomb, two men or two angels?\nMark 16:5-6 says they saw a young man, Matthew 28:5 says \"But the angel said to the women...\", Luke 24:4 says there were two men and John 20:11-13 says that Mary saw two angels. Skeptics point out that one says 'angels' and the other says 'men', but throughout scriptures angels appear as men, so this is not a contradiction. Look at Genesis 18:1-2, these visitors in the very next chapter are called angels (Genesis 19:1). Jacob wrestled with the man until daybreak in Genesis 32:22-32. We read in Hosea 12:4 that he wrestled with the Angel of the Lord. Joshua 5:13-15, Judges 13:9-10, Daniel 10:16-18 and finally Hebrews 13:2.\nHow many angels were there? Matthew and Mark focus on the one who spoke. They don't mention the other. But omission itself doesn't equal denial. There is no account saying that there was one and no other."
          }
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'Inadequate alternative theories on the resurrection'}
          body={
            "Gary Habermas made a list of minimal facts accepted by the vast majority of scholars and experts (both christian and non-christian). The minimal facts are: \n\"1. Jesus died by crucifixion.\n2. Jesus' disciples believed that he rose and appeared to them.\n3. The church persecutor Paul was suddenly changed.\n4. The skeptic James, brother of Jesus was suddenly changed.\n5. The tomb was empty.\"\nThrough abductive reasoning we can rationalize the hypothesis or theory that best explains all these facts. People have come with all sorts of theories in order to explain these facts. Let's look at the possible explanations.\n\nApparent death\n\"Jesus did not die, but only appeared to die.\" . The issue with this theory is that for both medical and historical reasons there isn't a possibility that Jesus survived and recovered from what He went through. To give one historical example, the roman soldiers made sure the crucified bodies were dead, because if they weren't dead, the heads of the roman soldiers would roll.\n\nTheft theory\n\"The disciples or thieves stole the body.\" . This theory originates from Matthew 28:11-15. The problem here is that not the emptiness of the tomb, but the appearances of Jesus convined Paul, James and the disciples. So thieves couldn't have stolen it. If the disciples stole the corpse of Jesus, than why would they for 40 years proclaim the gospel while being persecuted and put in prison to just end up being brutally killed, all for a lie? With that, it doesn't explain how the 500 people saw Jesus alive.\n\nHallucinations theory\n\"The disciples (and the 500 people) hallucinated to have seen Jesus.\" . To name 2 issues, group hallucinations are not possible and where would've been the body? \"But what if this theory is combined with the 'theft theory'?\". This still wouldn't hold up, because you would still have the implications of the theft theory.\n\nWrong tomb theory\n\"Those who went to the tomb, went to the wrong tomb and thus mistook it for Jesus' resurrection.\" . One issue with this theory is that Paul, James and all disciples but John, believe they had seen the risen Jesus. They weren't convinced by the empty tomb. Also why was this misunderstanding not cleared up by the authority by showing the corpse?\n\nFamily tomb theory\n \"A family tomb has been found with the inscriptions of the names that are also written in the New Testament. DNA analysis shows that Jesus and Mary Magdalene could've been married and had a son named Judah, whom wrote the book of John.\". The issue here is that these were very common names in that era, also the inscription 'Jesus, son of Joseph' doesn't sound like Jesus the Messiah, which the disciples would most likely name Him. The DNA analysis shows Jesus and Mary are not blood related, but that means they could've been siblings, cousins, aunts or which ever relative form as well, not just a spouse.\n\nThe resurrection\n\"Jesus rose from the dead after three days, appeared to Paul, James, the disciples and the 500 people. Ascended to heaven after 40 days.\"\nThis hypothesis best explains al these facts. There are no issues to be found with this hypothesis, except for the already handled and other potential contradictions of the New Testament that, but those can easily be refuted."
          }
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'Conclusion'}
          body={
            'So to conclude, where does the evidence point to? There is no feasible reason to disbelief that Jesus was condemned to the cross by Pontius Pilate, let alone that Jesus never existed. If Jesus lived and died, than the only reasonable explanation for the minimal facts mentioned before is the resurrection.'
          }
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'Sources'}
          body={'...'}
          styleOpacity={styleOpacity}
        />
      </ScrollView>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EvidenceForJesus;
