<h1>leervragen</h1>

<ol>
<li>
    Ik wil leren hoe ik een scroll driven animation kan maken


</li>
<li>Ik wil view transiions snappen en hoe ik dit kan toepassen in een framework in plaats van html css javascript

</li>

<li>
    ik wil kijken hoe ik rekening kan houden met toegankelijkheid tijdens het maken van de animatie
</li>



</ol>


<h2>leervragen beantwoord</h2>
<ol>
    <li>Dit is de animatie die ik gemaakt heb<a href="https://github.com/lisagjh/voorhoede/pull/43">Link naar de pull request</a>
    </li>
    <li>ik heb een view transition gemaakt dat je op een knop drukt maak mij recht en dat het cardje dan recht word ga naar pull request om dit te zien
<a href="https://github.com/lisagjh/voorhoede/pull/48">zie pull request met livelink</a></li>



<li> met deze code hou ik rekeing met de eindgebruiker door te kijken naar prefers reduced motion

````css
   @media (prefers-reduced-motion: reduce) {
        .card {
            animation: none;
        }
        :global(.card.active) {
            animation: none; /* Remove the animation */
        }
    }
````

ook heb ik een if statement bij die viewtransition dat als de browser viewtransitions niet ondersteund dat ze dan niet getoond worden



</li>
       
</ol>
