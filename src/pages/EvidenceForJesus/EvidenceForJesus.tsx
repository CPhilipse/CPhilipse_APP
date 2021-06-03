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
            'If Jesus really rose from the dead to prove He is God, would you follow Him?\n\n'
          }
          styleOpacity={styleOpacity}
          showSwipeIndication
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'Non-Christian historical sources'}
          body={
            "There are 2 historians that are of significant value in regards to Jesus' existence and death; \n\nTacitus\nHis written documents verify Jesus' crucifixion under Tiberius and Pontius Pilate. [see original]\n\nFlavius Josephus\nHe has written the Antiquities of the Jews. He verifies through Antiquites 20.200 that the brother of Jesus, James, has been stoned to death. [see original] Through his work the Antiquities 18:63 he verifies that Jesus has been condemned to be crucified by Pontius Pilate. [see original]\n\nOther historians\nThallus, Mara Bar-serapion, Phelgon, Babylonian Talmud, Suetonius, Pliny the Younger and Lucian of Samosata are all historians who mention Jesus in their work. It is remarkable to discover that not one of all of these historical documents that have been found doubt Jesus' His existence."
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
            "To verify whether the writers of the New Testament are telling a true story can be done by verifying elements of it. Let's see what elements are verified to be true.\n\nPontius Pilate\nThe man who has condemned Jesus to be crucified. He has been verified to be a historical figure through historians as Pliny the Younger, Josephus, Tacitus and the Gospels. Also is there archeological evidence proofing he is a historical figure. Namely: a copper ring with the inscription 'of Pilate' and a stone which has the inscription 'Pilate' have been found.\n\nYehosef Bar Caiaphas\nThis person is a high priest who is famous for his involvement with the crucifixion of Jesus. He has been mentioned in the New Testament (Matt. 26:3, 57; Luke 3:2; John 11:49; 18:13-14, 24, 28; Acts 4:6). There has been found a bone box (some sort of grave) of a relative of this high priest which has the inscription 'Yehosef bar Qafa' which means 'Joseph son of Caiaphas'. The historian Josephus also talks about this relative Joseph Caiaphas in Antiquities XVIII.33-35. All this verifies the historical figure Caiaphas. [see original]\n\nThe eclips\n...\n\nRoman crucifixions\n...\n\nJesus hometown\n...\n\nGolgotha\n...\n\nTombs\n...\n\nConclusion\n..."
          }
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={"Most popular popular 'contradictions' debunked"}
          body={
            "Certain historian specialists like Bart Ehrman believe the New Testament to be false on the resurrection because of the pieces of text that they see as 'contradictions'. Let's see why or why not these pieces are contradictions."
          }
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'Inadequate alternative theories on the resurrection'}
          body={
            "People have come with all sorts of theories to explain the empty tomb, the rise of Christians through the convictions and proclamations of Paul, James and the disciples to have seen the risen Jesus and the conviction of the women who had found the empty tomb. The only issue is that these theories don't have a leg to stand on.\n\nApparent death\n\"Jesus did not die, but only appeared to die.\" . The issue with this theory is that for both medical and historical reasons there isn't a possibility that Jesus survived and recovered from what He went through. To give one historical example, the roman soldiers made sure the crucified bodies were dead, because if they weren't dead, the heads of the roman soldiers would roll.\n\nTheft theory\n\"The disciples or thieves stole the body.\" . This theory originates from Matthew 28:11-15. The problem here is that not the emptiness of the tomb, but the appearances of Jesus convined Paul, James and the disciples. So thieves couldn't have stolen it. If the disciples stole the corpse of Jesus, than why would they for 40 years proclaim the gospel while being persecuted and put in prison to just end up being brutally killed, all for a lie? With that, it doesn't explain how the 500 people saw Jesus alive.\n\nHallucinations theory\n\"The disciples (and the 500 people) hallucinated to have seen Jesus.\" . To name 2 issues, group hallucinations are not possible and where would've been the body? \"But what if this theory is combined with the 'theft theory'?\". This still wouldn't hold up, because you would still have the implications of the theft theory.\n\nWrong tomb theory\n\"Those who went to the tomb, went to the wrong tomb and thus mistook it for Jesus' resurrection.\" . One issue with this theory is that Paul, James and all disciples but John, believe they had seen the risen Jesus. They weren't convinced by the empty tomb. Also why was this misunderstanding not cleared up by the authority by showing the corpse?\n\nFamily tomb theory\n \"A family tomb has been found with the inscriptions of the names that are also written in the New Testament. DNA analysis shows that Jesus and Mary Magdalene could've been married and had a son named Judah, whom wrote the book of John.\". The issue here is that these were very common names in that era, also the inscription 'Jesus, son of Joseph' does't sound like Jesus the Messiah, which the disciples would most likely name Him. The DNA analysis shows Jesus and Mary are not blood related, but that means they could've been siblings, cousins, aunts or which ever relative form as well, not just a spouse."
          }
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'Conclusion'}
          body={
            'So to conclude, where does the evidence point to? There is no reason to disbelief that Jesus was condemned to the cross by Pontius Pilate, let alone that Jesus never existed. If Jesus lived and died, than the only reasonable explanation for the empty tomb is the resurrection.'
          }
          styleOpacity={styleOpacity}
        />
      </ScrollView>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EvidenceForJesus;
